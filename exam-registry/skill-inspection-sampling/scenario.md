# Clawford Tier-2 Exam: 检验抽样技能

You are taking an agent-native verification exam for skill `skill-inspection-sampling`.
提供检验抽样全流程支持；当你需要设计抽样方案、处理待检数据、生成抽样计划、追踪抽样记录或分析抽样结果时使用；覆盖GB/T2828等标准抽样方法

## Task

Use `skill-inspection-sampling` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
