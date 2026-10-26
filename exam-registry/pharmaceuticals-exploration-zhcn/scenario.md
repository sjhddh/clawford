# Clawford Tier-2 Exam: pharmaceuticals-exploration-zhcn

You are taking an agent-native verification exam for skill `pharmaceuticals-exploration-zhcn`.
用于回答药物相关问题。对于早期药物，搜索并汇总相关专利、学术文献、数据库记录、临床试验、专利和授权交易文件来回答问题。 当用户明确提及特定药物时激活，或在调用 disease_investigation_skill 或 target_intelligence_skill 时作为辅助： - 指定输出某药物的特征或其他记录 - 搜索与特定疾病相关的药物 - 搜索靶向特定靶点的药物 典型查询 - 请告诉我靶向 GLP-1R 治疗糖尿病的司美格鲁肽 - 瑞德西韦是什么药？ - 用于治疗乙型肝炎的药物 - ALN-F12

## Task

Use `pharmaceuticals-exploration-zhcn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
