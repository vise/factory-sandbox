import { describe, expect, it } from "vitest";
import { createSession } from "../src/auth/session";

describe("createSession", () => {
  it("returns a token for the demo user", () => {
    const session = createSession("demo", "demo-password");
    expect(session?.token).toBeTruthy();
  });

  it("returns null for a wrong password", () => {
    expect(createSession("demo", "wrong")).toBeNull();
  });

  it("returns null for empty credentials", () => {
    expect(createSession("", "")).toBeNull();
  });
});
