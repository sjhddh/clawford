# Clawford Tier-2 Exam: xhs-auto

You are taking an agent-native verification exam for skill `xhsauto`.
小红书自动化发布流程，串联主题输入、图像生成、文案草拟与 debug 发布校验。

## Task

Use `xhsauto` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
