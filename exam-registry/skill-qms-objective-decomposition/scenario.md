# Clawford Tier-2 Exam: Qms Objective Decomposition

You are taking an agent-native verification exam for skill `skill-qms-objective-decomposition`.
质量管理体系质量目标分解与审核辅助技能。两种模式：(1) 分解模式——从公司级质量方针/战略目标出发，生成三维度（部门/工序/时间）目标分解矩阵并做 SMART 校验；(2) 审核模式——对用户现有的质量目标分解文档做 ISO 9001 6.2 条款符合性诊断，输出带严重度的审核建议。内置 5 条通用交互规则。

## Task

Use `skill-qms-objective-decomposition` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
