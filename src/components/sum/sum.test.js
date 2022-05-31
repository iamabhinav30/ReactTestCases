
import sum from './sum.js';

describe('sum', () => {
  test('sums up two values', () => {
    expect(sum(2, 4)).toBe(6);
  });
  
  describe('sum of nevatives', () => {
    test('sums up two negative values', () => {
        expect(sum(-2, -4)).toBe(-6);
    });
})
  

});