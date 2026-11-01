# AGENTS.md — factory-sandbox

A small bill-splitter web app that exists to test an AI software factory. It is
public and holds nothing secret. Keep it small: every change should be one
reviewable pull request.

## Setup (fresh checkout or worktree)

```bash
npm ci
```

No env files are needed.

## Dev server

```bash
PORT=<port> npm run dev
```

Serves the page at `http://localhost:<port>/`. `--strictPort` is on, so pick a
free port rather than letting Vite move.

## Validation

Run all of these before saying a change is done. They must all pass:

```bash
npm run lint && npm run typecheck && npm test && npm run build
```

Lint only the files you changed if you run ESLint by hand, and never with `--fix`
across the repo.

## Layout

| Path | What |
|---|---|
| `index.html`, `src/main.ts` | The page: a form (total, people, tip) and the list of shares |
| `src/split.ts` | `splitBill(totalCents, people, tipPercent)`: shares in whole cents |
| `src/auth/session.ts` | A **fake** demo login (`demo` / `demo-password`). Sandbox only. |
| `tests/` | Vitest tests. Existing tests are protected: add new ones, don't edit or delete these. |

## Conventions

- TypeScript strict mode; no `any`.
- Money is always whole cents (`number`); format only at the edge (`src/main.ts`).
- Bad input throws `RangeError` with a message a person can read; the page shows it inline.
- No fallback logic that hides a problem: fail loudly.
- Match the surrounding code's style and comment density.

## Pull requests

- Agents open PRs, humans merge them. An agent never merges a PR or pushes to `main`.
- One PR per change, with a short description of what changed and how it was checked.
- Anything touching `src/auth/` needs a human decision: say so in the PR.
