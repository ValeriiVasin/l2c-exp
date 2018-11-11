// basd on https://l2central.info/classic/Группа
const partyExpModifiers = [0, 1, 1.6, 1.65, 1.7, 1.8, 1.9, 2, 2.1, 2.2];
const penalties = [
  1,
  0.98,
  0.95,
  0.93,
  0.91,
  0.88,
  0.86,
  0.83,
  0.81,
  0.78,
  0.23,
  0.22,
  0.21,
  0.2,
  0.19
];

export const getPenaltyCoefficient = (penalty: number): number => {
  if (penalty > penalties.length - 1) {
    return 0;
  }

  return penalties[penalty];
};

/**
 * calculates total raw exp on the spot based on raw exp of party member
 */
export const memberToPartyExp = ({
  exp,
  members,
  penalty
}: {
  exp: number;
  members: number;
  penalty: number;
}) => {
  if (members === 1) {
    return exp;
  }

  return Math.round(
    (exp / partyExpModifiers[members] / getPenaltyCoefficient(penalty)) *
      members
  );
};

/**
 * Calculates exact member exp based on party total exp on the spot
 */
export const partyToMemberExp = ({
  exp,
  members,
  penalty
}: {
  exp: number;
  members: number;
  penalty: number;
}): number => {
  if (members === 1) {
    return exp;
  }

  return Math.round(
    (exp / members) *
      getPenaltyCoefficient(penalty) *
      partyExpModifiers[members]
  );
};

/**
 * Converts exp person would get in different party setups
 * based on the condition that total party exping stays the same (single DD or so)
 */
export const convertPartyExp = (
  exp: number,
  {
    from,
    fromPenalty,
    to,
    toPenalty
  }: { from: number; fromPenalty: number; to: number; toPenalty: number }
) => {
  if (from === to && fromPenalty === toPenalty) {
    return exp;
  }

  const partyExp = memberToPartyExp({
    exp,
    members: from,
    penalty: fromPenalty
  });

  return partyToMemberExp({ exp: partyExp, members: to, penalty: toPenalty });
};
