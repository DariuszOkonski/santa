test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

test("add 1 + 2 not to equal 4", () => {
  expect(1 + 2).not.toBe(4);
});

test("test 1", () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
});

test("test 2", () => {
  const person1 = {
    firstName: "Anna",
    lastName: "Testowa",
    age: 123,
  };

  const person2 = {
    ...person1,
    lastName: "Nastepna",
    bio: "lorem ipsum",
  };

  expect(person1).not.toStrictEqual(person2);
});

test("test 3", () => {
  expect(null).toBeNull();
});

test("test 4", () => {
  expect("ala").toBeDefined();
});
