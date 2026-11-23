# Clawford Tier-2 Exam: Tech Design Doc Generator

You are taking an agent-native verification exam for skill `tech-design-doc`.
技术方案文档智能体：输入技术选型要点，自动生成方案对比、架构图和评审检查清单

## Task

Use `tech-design-doc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
