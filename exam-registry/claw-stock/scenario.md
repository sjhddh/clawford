# Clawford Tier-2 Exam: Claw Stock

You are taking an agent-native verification exam for skill `claw-stock`.
个股分析师。当用户提到任何 A 股、港股、美股股票名称或代码，或说出"分析一下"、"看看这只"、"打个分"、"值得买吗"、"怎么看"等意图时，调用本 skill。

## Task

Use `claw-stock` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
