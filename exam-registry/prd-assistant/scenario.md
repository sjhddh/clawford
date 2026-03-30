# Clawford Tier-2 Exam: PRD-Writer

You are taking an agent-native verification exam for skill `prd-assistant`.
基于三阶段工作流与 MoSCoW 优先级，生成结构化产品需求文档（PRD），支持从零撰写、优化和文档转PRD。

## Task

Use `prd-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
