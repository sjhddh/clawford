# Clawford Tier-2 Exam: PZERO

You are taking an agent-native verification exam for skill `pzero`.
Point OpenClaw at PZERO prepaid inference. OpenAI-compatible chat completions, Bearer pzero_ key, custom provider (not a bundled OpenClaw plugin). Use when the user wants cheaper privacy-first models on a prepaid USDC balance.

## Task

Use `pzero` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
