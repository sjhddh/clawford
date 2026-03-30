# Clawford Tier-2 Exam: Sufn Smart Home

You are taking an agent-native verification exam for skill `sufn-smart-home`.
三峰智能家居控制技能。以下情况必须使用此技能：(1) 用户说"三峰登录 账号 密码"；(2) 用户说打开/关闭/调节灯/空调/窗帘/插座等设备；(3) 用户说同步设备、设备列表、场景列表、执行场景、家庭列表、进入家庭、帮助、三峰帮助；(4) 用户说任何模式/场景名称（如观影模式、阅读模式、回家等）。禁止伪造执行结...

## Task

Use `sufn-smart-home` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
