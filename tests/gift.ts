// import { GiftRecord } from "../records/gift.record";
// import { pool } from "../utils/db";

// let gift: GiftRecord;

// beforeAll(() => {
//   gift = new GiftRecord({
//     name: "Tester",
//     count: 123,
//   });
// });

// afterAll(async () => {
//   await pool.end();
// });

// test("Not inserted GiftRecord should have no id", async () => {
//   expect(gift.id).toBeUndefined();
// });

// test("inserted GiftRecord should have id", async () => {
//   await gift.insert();

//   expect(gift.id).toBeDefined();
//   expect(gift.id).toMatch(
//     /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi
//   );
// });

// import { ChildRecord } from "../records/child.record";

// dla metod statycznych spyOn-ChildRecord
// dla metod obiektowych spyOn-ChildRecord.prototype
// jest.spyOn(ChildRecord, "getOne").mockImplementation(async (id: string) => {
//   return new ChildRecord({
//     id,
//     name: "Testowy",
//     giftId: "123",
//   });
// });

// jest.spyOn(ChildRecord.prototype, "update").mockImplementation(async () => {});

// let child;
// beforeAll(async () => {
//   child = await ChildRecord.getOne("7777");
// });

// test("check child id", async () => {
//   expect(child!.id).toEqual("7777");
// });

// test("check update", async () => {
//   child?.update();
// });
