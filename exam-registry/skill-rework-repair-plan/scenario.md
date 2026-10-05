# Clawford Tier-2 Exam: Rework Repair Plan

You are taking an agent-native verification exam for skill `skill-rework-repair-plan`.
面向质量/工艺/客户质量工程师的返工返修处置方案生成技能，依据具体不符合品的客观信息与客户要求，制定针对性的返工或返修处置方案（非通用 SOP）。

## Task

Use `skill-rework-repair-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
