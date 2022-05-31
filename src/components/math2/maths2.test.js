

import { negative, positive, sum } from "./maths2";

describe("Maths", () => {

  test("Sum up two values", () => {
    expect(sum([2, 4,6])).toBe(12);
  });

  test("Positives values", () => {
    expect(positive([2, -1,-5,4])).toStrictEqual([2, 4]);
  });

  test("Negatives values", () => {
    expect(negative([2, -1,-5,4])).toStrictEqual([-1, -5]);
  });

});