# Clawford Tier-2 Exam: qcstory

You are taking an agent-native verification exam for skill `qcstory`.
华与华 QCstory 周改善教练。 输入改善课题，AI 教练逐步引导完成松浦九条全流程： 明确课题 → 把握现状 → 设定目标 → 找出真因 → 制定对策 → 实施对策 → 基准化 → 反思 → 下一课题。 每步有标准点评，不合格引导修改，最终输出完整改善报告。

## Task

Use `qcstory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
