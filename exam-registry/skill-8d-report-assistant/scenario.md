# Clawford Tier-2 Exam: 8D报告技能

You are taking an agent-native verification exam for skill `skill-8d-report-assistant`.
8D问题解决报告生成工具，采用分步引导+对话式信息收集模式，生成结构化详细报告，适用于汽车等行业质量问题分析场景；覆盖D1-D8八大步骤

## Task

Use `skill-8d-report-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
