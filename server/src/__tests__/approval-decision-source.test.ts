import { randomUUID } from "node:crypto";
import { eq } from "drizzle-orm";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { approvals, companies, createDb } from "@paperclipai/db";
import { getEmbeddedPostgresTestSupport, startEmbeddedPostgresTestDatabase } from "./helpers/embedded-postgres.js";
import { approvalRecords, approvalService } from "../services/approvals.js";

const support = await getEmbeddedPostgresTestSupport();

(support.supported ? describe : describe.skip)("approval decision source persistence", () => {
  let database: Awaited<ReturnType<typeof startEmbeddedPostgresTestDatabase>>;
  let db: ReturnType<typeof createDb>;
  let companyId: string;

  beforeAll(async () => {
    database = await startEmbeddedPostgresTestDatabase("approval-decision-source-");
    db = createDb(database.connectionString);
  }, 60_000);

  afterEach(async () => {
    await db.delete(approvals).where(eq(approvals.companyId, companyId));
    await db.delete(companies).where(eq(companies.id, companyId));
  });

  afterAll(async () => {
    await db?.$client.end({ timeout: 1 });
    await database?.cleanup();
  });

  it("distinguishes a web session from board automation and resets revision provenance", async () => {
    companyId = randomUUID();
    await db.insert(companies).values({
      id: companyId,
      name: "Approval source test",
      issuePrefix: `S${companyId.slice(0, 6)}`,
    });
    const records = approvalRecords(db);
    const service = approvalService(db);
    const session = await records.create(companyId, { type: "request_board_approval", payload: {} });
    const automation = await records.create(companyId, { type: "request_board_approval", payload: {} });
    const revision = await records.create(companyId, { type: "request_board_approval", payload: {} });

    await service.approve(session.id, "same-board-user", "yes", "session");
    await service.reject(automation.id, "same-board-user", "no", "board_key");
    await records.requestRevision(revision.id, "same-board-user", "revise", "mcp_oauth");

    expect((await service.getById(session.id))?.decisionSource).toBe("session");
    expect((await service.getById(automation.id))?.decisionSource).toBe("board_key");
    expect((await service.getById(revision.id))?.decisionSource).toBe("mcp_oauth");

    await records.resubmit(revision.id);
    expect((await service.getById(revision.id))?.decisionSource).toBeNull();

    await service.approve(revision.id, "same-board-user", "now okay", "session");
    expect((await service.getById(revision.id))?.decisionSource).toBe("session");
  });
});
