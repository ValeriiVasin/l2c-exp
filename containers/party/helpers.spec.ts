import {
  convertPartyExp,
  memberToPartyExp,
  getPenaltyCoefficient,
  partyToMemberExp
} from './helpers';

describe('penalty coefficient', () => {
  it('equals 1 for zero penalty', () => {
    expect(getPenaltyCoefficient(0)).toBe(1);
  });

  it('equals zero if penalty is 15 or more levels', () => {
    expect(getPenaltyCoefficient(15)).toBe(0);
  });

  it('is correct for different levels', () => {
    expect(getPenaltyCoefficient(1)).toBe(0.98);
    expect(getPenaltyCoefficient(5)).toBe(0.88);
    expect(getPenaltyCoefficient(9)).toBe(0.78);
    expect(getPenaltyCoefficient(14)).toBe(0.19);
  });
});

describe('calculate party exp based on member one', () => {
  it('is same amount for single-member party', () => {
    expect(memberToPartyExp({ exp: 10000, members: 1, penalty: 0 })).toBe(
      10000
    );
  });

  it('returns correct value for 2-member party with penalties', () => {
    expect(memberToPartyExp({ exp: 1600, members: 2, penalty: 1 })).toBe(2041);
  });
});

describe('calculate member exp based on party exp', () => {
  it('is the same for single-member party', () => {
    expect(partyToMemberExp({ exp: 1000, members: 1, penalty: 0 })).toBe(1000);
  });

  it('returns correct amount for 2-member party with penalty', () => {
    expect(partyToMemberExp({ exp: 10000, members: 2, penalty: 9 })).toBe(6240);
  });
});

describe('party exp', () => {
  it('does not change if amount of members does not change (no penalties)', () => {
    expect(
      convertPartyExp(1000, { membersFrom: 1, penaltyFrom: 0, membersTo: 1, penaltyTo: 0 })
    ).toBe(1000);
  });

  it('calculates exp for different party members amount properly (no penalties)', () => {
    expect(
      convertPartyExp(1600, { membersFrom: 2, penaltyFrom: 0, membersTo: 1, penaltyTo: 0 })
    ).toBe(2000);
    expect(
      convertPartyExp(1600, { membersFrom: 2, penaltyFrom: 0, membersTo: 4, penaltyTo: 0 })
    ).toBe(850);
  });

  it('calculates exp correctly for few-member parties with penalties', () => {
    expect(
      convertPartyExp(10000, { membersFrom: 2, penaltyFrom: 9, membersTo: 3, penaltyTo: 4 })
    ).toBe(8021);
  });
});
