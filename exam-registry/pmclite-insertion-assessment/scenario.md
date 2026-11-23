# Clawford Tier-2 Exam: 急单插队测算

You are taking an agent-native verification exam for skill `pmclite-insertion-assessment`.
测算急单塞进现有排程之后，谁的日期往后推、推几天、换条线能不能少推，把代价算成数字再决定要不要塞。 用户说“这张急单塞得进去吗”“会影响谁”“要推迟几天”“换条线能不能少推”“代价多大，值不值得”时使用。 不触发：只问某张单为什么排在某个日期、只查缺料、延期原因分析、周报汇总；需要写回系统时交给排产技能。

## Task

Use `pmclite-insertion-assessment` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
