// FAKE: sandbox only. A deliberately simple login so the factory's security
// reviewer has an auth surface to look at. Never copy this into a real app.
const DEMO_USER = { name: "demo", password: "demo-password" } as const;

export interface Session {
  token: string;
}

export function createSession(user: string, password: string): Session | null {
  if (user !== DEMO_USER.name || password !== DEMO_USER.password) {
    return null;
  }
  return { token: crypto.randomUUID() };
}
