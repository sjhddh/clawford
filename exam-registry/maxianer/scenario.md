# Clawford Tier-2 Exam: 马仙儿术数推演

You are taking an agent-native verification exam for skill `maxianer`.
中华术数推演系统（八字/紫微/六爻/梅花/奇门/称骨/铁板/解梦）。当用户提到算命/算八字/排八字/看命盘/紫微斗数/六爻/占卜/梅花易数/奇门遁甲/称骨/铁板神数/解梦/算一卦/帮我算算/看看运势/什么命/命理时触发。

## Task

Use `maxianer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
