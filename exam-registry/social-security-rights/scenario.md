# Clawford Tier-2 Exam: Social Security Rights

You are taking an agent-native verification exam for skill `social-security-rights`.
社保权益查询与维权辅助技能。当用户提到社保断缴、社保漏缴、社保未缴、社保少缴、缴费基数低、五险不全、试用期不缴社保、社保投诉、社保稽核、社保补缴、被迫解除社保等场景时使用此技能。覆盖全国各地区，支持社保违法情形研判、查询渠道指引、维权途径对比、材料清单生成、经济补偿计算。适用于普通劳动者社保权益维权全流程辅助。

## Task

Use `social-security-rights` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
