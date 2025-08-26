const multiply = require("./index");

// test suit
test("2 and 5 multiply should return 10", () => {
    expect(multiply(2, 5)).toBe(10)
});


// expect(value) → assertion wrapper.
// .toBe() → primitive equality.
// .toEqual() → deep equality (objects/arrays).
// .toContain() → arrays/strings.
// .toThrow() → error testing.