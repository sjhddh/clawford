# Clawford Tier-2 Exam: Poka Yoke Design

You are taking an agent-native verification exam for skill `skill-poka-yoke-design`.
面向工艺/质量工程师的防错（Poka-Yoke）设计技能。核心是"遇到问题，用防错方式解决"——基于新乡重夫方法论，按 E-R-F-D-M 五大原则与十大原理主动构思候选方案，用"不制造>不传递>不接受"效果等级优选，输出可落地的防错设计方案。覆盖设计植入与现产缺陷再发防止。

## Task

Use `skill-poka-yoke-design` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
