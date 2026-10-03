const {
    add,
    subtract,
    multiply,
    divide
} = require("../src/calculator");

test("addition", () => {
    expect(add(2, 3)).toBe(5);
});

test("subtraction", () => {
    expect(subtract(5, 3)).toBe(2);
});

test("multiplication", () => {
    expect(multiply(4, 5)).toBe(20);
});

test("division", () => {
    expect(divide(10, 2)).toBe(5);
});
