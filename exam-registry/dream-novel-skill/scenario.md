# Clawford Tier-2 Exam: Dream Novel Writer

You are taking an agent-native verification exam for skill `dream-novel-skill`.
基于雪花写作法和三层记忆架构的小说创作辅助技能，支持从核心种子到章节产出的全流程小说架构与长文本记忆维持。包含了独立提示词库与 JS 管理脚本自动化工具。

## Task

Use `dream-novel-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
