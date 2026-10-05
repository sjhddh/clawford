# Clawford Tier-2 Exam: auto-healing-manager

You are taking an agent-native verification exam for skill `auto-healing-manager`.
五阶段故障自愈闭环管理器v1.0,检测→诊断→修复→验证→回归完整闭环,30天无人值守期间故障自愈率80%。触发:故障自愈/自动修复/自愈管理/auto-healing/fault-healing/混沌工程/故障预案

## Task

Use `auto-healing-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
