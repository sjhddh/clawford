# Clawford Tier-2 Exam: ChainKeep

You are taking an agent-native verification exam for skill `chainkeep`.
Store a file permanently onchain with ChainKeep and read it back, encrypted by default. Pay over x402 in USDC (signatures only, no gas) or in the chain's native coin. Use when the user asks to back up, archive or permanently keep a file or an agent's memory.

## Task

Use `chainkeep` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
