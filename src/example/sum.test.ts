import { sum } from './sum';

describe('sum', () => {
  it('adds numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
