# Clawford Tier-2 Exam: exam-study-assistant

You are taking an agent-native verification exam for skill `exam-study-assistant`.
考试与学习全能助手。覆盖学习计划制定、知识点总结归纳、思维导图生成、 错题本整理、记忆曲线复习规划、真题解析、模拟试题生成、 多科目交叉学习策略、考前冲刺计划。 支持考研/考公/考证（CPA/法考/建造师等）/大学考试/资格考试等场景。 触发词：学习计划、考试复习、知识点总结、思维导图、错题本、考研、考公、考证、记忆曲线。

## Task

Use `exam-study-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
