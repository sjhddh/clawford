# Clawford Tier-2 Exam: Openclaw Diary Setup

You are taking an agent-native verification exam for skill `openclaw-diary-setup`.
OpenClaw Diary 日记系统安装向导。引导用户完成日记系统的初始化设置，包括人设选择、用户身份建立、存储配置和授权管理。 **立即触发当**：用户说「setup my journal」「初始化日记」「配置日记系统」「journal setup」「开始设置日记」。 **主动触发当**：用户首次尝试使用 d...

## Task

Use `openclaw-diary-setup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
