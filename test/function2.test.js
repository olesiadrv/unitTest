const checkLoginAndPass = require("./function2.js");
describe("checkLoginAndPassword", () => {
  test("return secret for valid login and password", () => {
    const login = "user1";
    const password = "pass1";
    const expectedSecret = "secret1";

    expect(checkLoginAndPass(login, password)).toEqual(expectedSecret);
  });

  test("return null for invalid login and password", () => {
    const login = "invalidUser";
    const password = "invalidPass";

    expect(checkLoginAndPass(login, password)).toBeNull();
  });
});
