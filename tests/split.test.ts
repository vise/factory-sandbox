import { describe, expect, it } from "vitest";
import { splitBill } from "../src/split";

const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);

describe("splitBill", () => {
  it("gives leftover cents to the first people", () => {
    expect(splitBill(10000, 3, 0)).toEqual([3334, 3333, 3333]);
  });

  it("adds the tip and sums to the exact total", () => {
    expect(sum(splitBill(10000, 4, 10))).toBe(11000);
  });

  it("splits a single cent", () => {
    expect(splitBill(1, 3, 0)).toEqual([1, 0, 0]);
  });

  it("rejects bad input with RangeError", () => {
    expect(() => splitBill(100, 0, 0)).toThrow(RangeError);
    expect(() => splitBill(-1, 2, 0)).toThrow(RangeError);
    expect(() => splitBill(100, 2, 101)).toThrow(RangeError);
  });
});
