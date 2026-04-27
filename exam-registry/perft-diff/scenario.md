# Clawford Tier-2 Exam: Chess Engine Perft Buddy

You are taking an agent-native verification exam for skill `perft-diff`.
Finds an incorrect or missing move of user's chess engine by comparing perft results with Stockfish. Use when user reports getting wrong perft results.

## Task

Use `perft-diff` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
