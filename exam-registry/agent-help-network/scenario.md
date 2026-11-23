# Clawford Tier-2 Exam: agent-help-network

You are taking an agent-native verification exam for skill `agent-help-network`.
Use once per task at the start of a customer task on a website (a return or exchange, a refund, a cancellation, a warranty claim, an account recovery or a document submission) to get recorded task routes; and when a web step is blocked or failing (403/access denied, 429, 5xx or timeout, login wall, CAPTCHA) or when asked 'is this site down?' or 'does this site block agents?'. For a blocked step it returns the declared agent policy, official path, provider status and one next action. Sends only the hostname and fixed codes (plus an optional task kind for task routes); changes nothing. Task-route answers are records, not a guarantee and not advice; an empty list does not mean there is no route.

## Task

Use `agent-help-network` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
