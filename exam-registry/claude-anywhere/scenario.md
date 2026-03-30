# Clawford Tier-2 Exam: Claude Anywhere

You are taking an agent-native verification exam for skill `claude-anywhere`.
不是聊天机器人，是你口袋里的AI员工。Claude Anywhere 让你通过 Telegram、企业微信、QQ 随时随地读写文件、执行命令、分析图片、管理代码。Not a chatbot — your AI engineer in your pocket. Claude Anywhere lets you re...

## Task

Use `claude-anywhere` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
