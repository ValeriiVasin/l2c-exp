import { getExp, formatTime } from './helpers';

describe('Levels difference', () => {
  it('calculates for exact levels correctly', () => {
    expect(getExp({ from: 28, to: 40 })).toBe(51357498);
  });

  it('calculates for not precise levels correctly', () => {
    expect(getExp({ from: 53.7, to: 55 })).toBe(76111635);
  });
});

describe('format time', () => {
  it('formats less than one minute', () => {
    expect(formatTime(0)).toBe('меньше минуты');
    expect(formatTime(0.33)).toBe('меньше минуты');
  });

  it('does not display 0 for hours', () => {
    expect(formatTime(55)).toBe('55мин');
  });

  it('does not display 0 for minutes', () => {
    expect(formatTime(60)).toBe('1ч');
  });

  it('formats time with hours and minutes', () => {
    expect(formatTime(83)).toBe('1ч 23мин');
  });

  it('rounds if number is fractional', () => {
    expect(formatTime(83.88)).toBe('1ч 24мин');
  });
});
