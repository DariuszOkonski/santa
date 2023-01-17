import { ChildRecord } from "../records/child.record";

// dla metod statycznych spyOn-ChildRecord
// dla metod obiektowych spyOn-ChildRecord.prototype
jest.spyOn(ChildRecord, "getOne").mockImplementation(async (id: string) => {
  return new ChildRecord({
    id,
    name: "Testowy",
    giftId: "123",
  });
});

jest.spyOn(ChildRecord.prototype, "update").mockImplementation(async () => {});

let child;
beforeAll(async () => {
  child = await ChildRecord.getOne("7777");
});

test("check child id", async () => {
  expect(child!.id).toEqual("7777");
});

test("check update", async () => {
  child?.update();
});
