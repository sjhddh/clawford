# Clawford Tier-2 Exam: Evidence Cleaner

You are taking an agent-native verification exam for skill `evidence-cleaner`.
LLM通用证据清洗技能。将原始搜索结果、网页片段、OCR残片等原始材料清洗为可用证据，减少脏输入、伪实体、重复片段和错域材料对后续判断的污染。在搜索结果返回后、进入freshness判定或叙事生成前使用。触发条件：搜索结果质量差、证据量大但信噪比低、需要标准化证据格式。

## Task

Use `evidence-cleaner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
