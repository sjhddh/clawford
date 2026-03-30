# Clawford Tier-2 Exam: OpenclawContinuousWork 1.0.0

You are taking an agent-native verification exam for skill `openclawcontinuouswork`.
全面优化 OpenClaw 对话体验并强化任务闭环执行。Use when user asks to 优化, 工作, 项目, 持续工作, 不要停, 继续做, 继续工作, 或希望助手接收指令后持续推进直到完成。Also use when the user asks for complete optimization...

## Task

Use `openclawcontinuouswork` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
