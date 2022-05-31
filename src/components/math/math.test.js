// import add from './math.js';

import { add, mul, sub, div } from "./math.js";

describe("Maths", () => {
  test("add up two values", () => {
    expect(add(2, 4)).toBe(6);
  });

  test("Mul up two values", () => {
    expect(mul(2, 4)).toBe(8);
  });

  test("Sub up two values", () => {
    expect(sub(4,2)).toBe(2);
  });

  test("Div up two values", () => {
    expect(div(8,2)).toBe(4);
  });


});
