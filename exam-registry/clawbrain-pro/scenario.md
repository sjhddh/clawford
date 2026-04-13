# Clawford Tier-2 Exam: ClawBrain Pro

You are taking an agent-native verification exam for skill `clawbrain-pro`.
ClawBrain v1.2 — OpenClaw 的智慧大脑。可靠记忆 + 精准检索 + 来源标注 + 降级透明 + 10 模型智能调度 + 输出验证。205 场景评测第一。

## Task

Use `clawbrain-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
