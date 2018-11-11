import { getExp } from './helpers';

describe('Levels difference', () => {
  it('calculates for exact levels correctly', () => {
    expect(getExp({ from: 28, to: 40 })).toBe(51357498);
  });

  it('calculates for not precise levels correctly', () => {
    expect(getExp({ from: 53.7, to: 55 })).toBe(76111635);
  });
});
