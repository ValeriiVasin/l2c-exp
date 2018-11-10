import { partyExp } from './helpers';

describe('party exp', () => {
  it('not changes if amount of members does not change', () => {
    expect(partyExp(1000, { from: 1, to: 1 })).toBe(1000);
  });

  it('calculates exp for different party members amount properly', () => {
    expect(partyExp(1600, { from: 2, to: 1 })).toBe(2000);
    expect(partyExp(1600, { from: 2, to: 4 })).toBe(850);
  });
});
