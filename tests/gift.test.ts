import { GiftRecord } from "../records/gift.record";
import { pool } from "../utils/db";

afterAll(async () => {
  await pool.end();
});

test("Not inserted GiftRecord should have no id", async () => {
  const nc = new GiftRecord({
    name: "Tester",
    count: 123,
  });

  await nc.insert();

  expect(nc.id).toBeDefined();
  expect(nc.id).toMatch(
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi
  );
});
