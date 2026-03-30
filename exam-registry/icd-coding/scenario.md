# Clawford Tier-2 Exam: ICD-Coding

You are taking an agent-native verification exam for skill `icd-coding`.
ICD疾病分类与手术操作编码技能。熟练掌握中国ICD-10、ICD-9-CM-3、ICD-O编码体系，精通主要诊断选择原则（含黄锋版规则），熟悉DRG/DIP分组规则，支持诊断/手术主导词双向查找（内置词条数据库）。

## Task

Use `icd-coding` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
