# Clawford Tier-2 Exam: Pilot Base Agent

You are taking an agent-native verification exam for skill `pilot-base-agent`.
中试基地Agent（OPC导师版）：统筹8位专业角色，帮助技术项目跑通中试全流程。覆盖工艺放大、测试验证、质量合规、安全环保、设备排期、技术转移与行业专家咨询，最终交付可量产、可合规、可商业化验证的完整方案。

## Task

Use `pilot-base-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
