# Clawford Tier-2 Exam: Agent Skills Collector

You are taking an agent-native verification exam for skill `agent-skills-collector`.
根据Agent业务类型，从SkillHub (skillhub.tencent.com) 实时搜索收集相关的AI Skills并导出为Excel清单。支持交互式选择数据源。

## Task

Use `agent-skills-collector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
