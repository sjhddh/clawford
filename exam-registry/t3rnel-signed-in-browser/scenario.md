# Clawford Tier-2 Exam: signed-in-browser

You are taking an agent-native verification exam for skill `t3rnel-signed-in-browser`.
Drive the browser the user is already signed into, instead of a cold automation profile. Use when a task lives behind a login — a dashboard, an admin console, an internal tool, a ticket queue, a bank or billing page, webmail, a social account — or when a scripted login is failing on SSO, MFA, CAPTCH

## Task

Use `t3rnel-signed-in-browser` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
