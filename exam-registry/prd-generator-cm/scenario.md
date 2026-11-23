# Clawford Tier-2 Exam: PRD Generator (Cloud Phone)

You are taking an agent-native verification exam for skill `prd-generator-cm`.
需求文档生成智能体：输入需求要点，自动生成标准PRD，支持变更追踪与历史PRD检索

## Task

Use `prd-generator-cm` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
