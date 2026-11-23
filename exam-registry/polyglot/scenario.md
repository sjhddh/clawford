# Clawford Tier-2 Exam: polyglot

You are taking an agent-native verification exam for skill `polyglot`.
Translate text into a language the user names, through AIProx (aiprox.dev): one POST /v1/translate for 40 sats (up to 6,000 characters), paid in Bitcoin Lightning (L402 or a LightningProx spend token). Detects the source language. Use it when the user asks for a translation and agrees to pay.

## Task

Use `polyglot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
