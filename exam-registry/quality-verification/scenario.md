# Clawford Tier-2 Exam: Quality Verification

You are taking an agent-native verification exam for skill `quality-verification`.
输出质量保障与验证。编辑后检查、提交前测试、session 指标测量。不适用于工具重试（用 tool-governance）或 agent 提前停止（用 execution-loop）。参见 tool-governance（错误追踪）。

## Task

Use `quality-verification` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
