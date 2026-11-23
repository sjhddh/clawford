# Clawford Tier-2 Exam: mock-interview(zjh)

You are taking an agent-native verification exam for skill `mock-interview`.
基于用户真实经历的模拟面试。引导录入经历后生成 5 道深挖题,在本地网页答题(支持语音),答完按 5 个维度打分并生成评分报告。当用户想练面试、模拟面试、准备面试、练习行为面试题时使用。

## Task

Use `mock-interview` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
