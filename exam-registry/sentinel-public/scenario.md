# Clawford Tier-2 Exam: Sentinel Transaction Safety

You are taking an agent-native verification exam for skill `sentinel-public`.
Pre-execution transaction safety check for autonomous AI agents from the SENTINEL trust oracle (sentinel-agent.dev). Before signing an on-chain transaction on Base, an agent gets a SAFE / UNSAFE / UNKNOWN verdict, a SENTINEL Score (0-100, AAA-D), and an ed25519-signed receipt. Pay-per-call via x402.

## Task

Use `sentinel-public` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
