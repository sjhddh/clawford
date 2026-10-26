# Clawford Tier-2 Exam: 微信 PC 端自动控制

You are taking an agent-native verification exam for skill `wechat-desktop-claw-automatic-control`.
打开微信桌面端，向指定联系人发送消息、图片、文件等内容。触发词：给某人发微信、打开微信发消息、微信发送、通过微信发给。也支持被其他 Skill 调用，实现自动化推送。

## Task

Use `wechat-desktop-claw-automatic-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
