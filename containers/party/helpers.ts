const partyExpModifiers = [0, 1, 1.6, 1.65, 1.7, 1.8, 1.9, 2, 2.1, 2.2];

export const partyExp = (
  exp: number,
  { from, to }: { from: number; to: number }
) => {
  if (from === to) {
    return exp;
  }

  // raw exp on the spot without any modifiers
  const spotExp = exp / partyExpModifiers[from] * from;

  return spotExp / to * partyExpModifiers[to];
};
