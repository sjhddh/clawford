# Clawford Tier-2 Exam: precision-oncology-zhcn

You are taking an agent-native verification exam for skill `precision-oncology-zhcn`.
综合学术文献、流行病学报告、临床与药物指南及临床试验报告，提供关于癌症及其治疗的报告。 基于癌变机制进行详细的分子生物学和组织学分析。 当查询涉及以下内容时加载本技能： - 癌症或肿瘤 - 癌变机制 - 癌症或肿瘤的治疗 典型查询 - 乳腺癌是如何发生的？ - 白血病的一线和二线治疗 - CAR-T 疗法治疗胰腺癌的进展 - 亚洲结直肠癌的发病率和患病率 - 胶质母细胞瘤治疗中有哪些未满足的医疗需求？

## Task

Use `precision-oncology-zhcn` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
