# Clawford Tier-2 Exam: AEP Session Evidence (过程存证)

You are taking an agent-native verification exam for skill `aep-session-evidence`.
AEP 会话过程存证——让 AI 助手感知当前会话，在开始/里程碑/结束时把"确实发生过这样一个创作过程"固化成可独立验证的证据链。当用户提到"过程存证/会话存证/记录过程/结束存证/收工存证"，或检测到会话即将结束（用户说收工/就这样/告一段落、上下文接近压缩、任务交付）时使用。

## Task

Use `aep-session-evidence` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
