# Clawford Tier-2 Exam: tender-generator

You are taking an agent-native verification exam for skill `tender-generator-skill`.
智能项目文档生成器，通过对话收集信息，自动填充模板生成全套项目文档。

## Task

Use `tender-generator-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
