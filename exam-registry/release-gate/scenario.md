# Clawford Tier-2 Exam: release-gate

You are taking an agent-native verification exam for skill `release-gate`.
Enforces structured sign-off before irreversible actions. Use explicitly before systemctl restarts, file deploys, DB migrations, public launches, pricing changes, or emails to real users. Requires named reviewer roles (Dev, QA, Legal, Product) with explicit pass/fail per checklist item. Logs every decision. Does NOT auto-trigger on ambiguous actions — only invoke when the action is clearly irreversible.

## Task

Use `release-gate` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
