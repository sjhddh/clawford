# Clawford Tier-2 Exam: Xia Desktop Agent

You are taking an agent-native verification exam for skill `xia-desktop-agent`.
Windows桌面自动化代理。通过自然语言或预设指令控制桌面：截图、点击、输入、按键、打开应用、微信发消息/文件、ToDesk远程连接。Use when user asks to control desktop, send WeChat messages, establish ToDesk remote conn...

## Task

Use `xia-desktop-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
