# Clawford Tier-2 Exam: OpenClaw Ops Guardrails

You are taking an agent-native verification exam for skill `openclaw-ops-guardrails`.
OpenClaw 运维防呆与排障标准化技能。用于跨设备（Gateway + Mac nodes）巡检、远程执行稳定性治理、CLI-only 兼容、配对/审批异常排查、以及对外发布前脱敏检查。用户提到“又报错了/审批超时/pairing required/system.run failed/如何标准化运维规则”时使用。

## Task

Use `openclaw-ops-guardrails` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
