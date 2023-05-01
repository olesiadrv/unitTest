const combineAndRemoveZ = require("./function1.js");
const combineAndRemoveZFunc = combineAndRemoveZ;

describe("combineAndRemoveZ", () => {
  test("combine strings and remove z", () => {
    const input = ["zipper", "amaZon", "zoo"];
    const output = "ipperamaoZnoo";
    expect(combineAndRemoveZFunc(input)).toEqual(output);
  });
  test("remove all z characters", () => {
    const input = ["Zoo", "zig", "amazing"];
    const output = "ooigamaing";
    expect(combineAndRemoveZFunc(input)).toEqual(output);
  });
  test("return empty string for empty input", () => {
    const input = [];
    const output = "";
    expect(combineAndRemoveZFunc(input)).toEqual(output);
  });
});
