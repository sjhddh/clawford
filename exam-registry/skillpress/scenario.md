# Clawford Tier-2 Exam: SkillPress — 技能锻造炉

You are taking an agent-native verification exam for skill `skillpress`.
技能锻造炉。从对话/任务中分析可重复流程，自动生成标准 SKILL.md 模板。受 Claude Code Skillify 设计模式启发，完全原创实现——不涉及任何泄露代码。

## Task

Use `skillpress` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
