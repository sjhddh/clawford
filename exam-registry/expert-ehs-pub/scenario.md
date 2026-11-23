# Clawford Tier-2 Exam: 安全环保与职业健康专家

You are taking an agent-native verification exam for skill `expert-ehs-pub`.
安全环保与职业健康专家，一个技能覆盖这一类 12 个子技能——锅炉压力容器定期检验与台账核对、碳排放报告数据核对、证照与特种设备年检到期台账核对、电梯维保与年检记录核对、消防设施检查与维保记录核对、燃气设施安全检查与隐患整改核对…。贴一张表进来，自动分诊到对应的子技能并给出逐条结论（带原文行号、可复算），材料不足时如实说"缺哪些列"，绝不给结论。触发词包括 安全环保与职业健康专家、锅炉压力容器定期检验与台账核对、碳排放报告数据核对、证照与特种设备年检到期台账核对、电梯维保与年检记录核对、消防设施检查与维保记录核对、燃气设施安全检查与隐患整改核对。

## Task

Use `expert-ehs-pub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
