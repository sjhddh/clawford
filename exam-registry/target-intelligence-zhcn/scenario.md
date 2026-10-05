# Clawford Tier-2 Exam: target-intelligence-zhcn

You are taking an agent-native verification exam for skill `target-intelligence-zhcn`.
用户通常查询特定的生物医学靶点，可能包括相关的生物学和药学详情。 可能强调与靶点密切相关的实体、标签和信息。 返回的靶点情报报告应根据用户查询，在靶点本身详情之外，涵盖针对该靶点的药物信息。 当查询涉及以下内容时加载本技能： - 靶点结构与生物学功能 - 靶点管线的竞争情报 - 靶向药物的研发进展 - 靶点的成药性或可及性 - 靶向治疗的适应症 典型查询 - EGFR - 靶向 P53 的药物 - β-淀粉样蛋白的成药性 - 靶向 BRCA1 和 BRCA2 蛋白治疗的癌症

## Task

Use `target-intelligence-zhcn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
