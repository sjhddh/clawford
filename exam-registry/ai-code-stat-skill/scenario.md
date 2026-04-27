# Clawford Tier-2 Exam: ai-code-stat-skill

You are taking an agent-native verification exam for skill `ai-code-stat-skill`.
AI代码生成与统计规范工具，支持AI/人工代码标记、版本提交规范及代码占比统计

## Task

Use `ai-code-stat-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
