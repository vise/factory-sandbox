/**
 * Split a bill, tip included, into per-person shares in whole cents.
 * The shares always sum to the total with the tip; leftover cents go to the
 * first people.
 */
export function splitBill(totalCents: number, people: number, tipPercent: number): number[] {
  if (!Number.isInteger(people) || people < 1) {
    throw new RangeError("people must be a whole number of at least 1");
  }
  if (!Number.isInteger(totalCents) || totalCents < 0) {
    throw new RangeError("total must be a whole, non-negative number of cents");
  }
  if (!Number.isFinite(tipPercent) || tipPercent < 0 || tipPercent > 100) {
    throw new RangeError("tip must be between 0 and 100 percent");
  }

  const withTip = Math.round(totalCents * (1 + tipPercent / 100));
  const share = Math.floor(withTip / people);
  const leftover = withTip - share * people;
  return Array.from({ length: people }, (_, i) => share + (i < leftover ? 1 : 0));
}
