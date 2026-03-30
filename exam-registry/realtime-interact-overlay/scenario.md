# Clawford Tier-2 Exam: realtime-interact-overlay

You are taking an agent-native verification exam for skill `realtime-interact-overlay`.
实时交互浮窗技能。在需要用户确认、输入或交互的场景中，通过浮窗方式在当前操作界面旁边进行交互， 而不是回到OpenClaw聊天窗口。适用于：(1) 评论内容需要用户确认后执行，(2) 删除文件前需要用户确认， (3) 购物付款时需要输入密码，(4) 任何需要即时交互的场景。支持系统级浮窗和浏览器内浮窗。

## Task

Use `realtime-interact-overlay` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
