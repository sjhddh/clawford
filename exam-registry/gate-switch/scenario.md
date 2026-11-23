# Clawford Tier-2 Exam: gate-switch

You are taking an agent-native verification exam for skill `gate-switch`.
Claim-verification gate engine for LLM agent workflows. Whenever an agent claims 'X is done / written / synced / verified', write X as a spec JSON of mechanical checks; the engine verifies each check and returns a verdict (A=pass / B=block with violations / CLARIFY / VIOLATION). Cures three chronic LLM failures: skipped work, partial delivery, fabricated claims. 声称 X 已满足，就机械核验 X——判定禁止手写，照抄输出。

## Task

Use `gate-switch` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
