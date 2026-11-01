# factory-sandbox

A tiny bill-splitter web app used to test an AI software factory: agents pick up
issues, write a spec, build the change on a `factory/*` branch, review it and
open a pull request, which a human merges. It has a page (for browser checks
and UI reviews), tests and a typecheck (for the gate), and a deliberately fake
login (for the security review). Nothing here is real or secret.

```bash
npm ci
npm run dev                # http://localhost:5173
npm run lint && npm run typecheck && npm test && npm run build
```
