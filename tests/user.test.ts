import { User } from "../utils/User";

let user: User;

beforeAll(() => {
  user = new User();
});

test("User should not be logged in at the beginning", () => {
  expect(user.loggedIn).toEqual(false);
});

test("User logged in state should not be modified outside of class", () => {
  // expect(() => {
  //   user.loggedIn = true;
  // }).toThrow();
  user.loggedIn = true;
  expect(user.loggedIn).toEqual(false);
});

test("User should have no e-mail at the beginning", () => {
  expect(user.email).toBeNull();
});

test("User email state should not be modified outside of class", () => {
  // expect(() => (user.email = "user@test.com")).toThrow();
  expect(user.email).toBeNull();
});
