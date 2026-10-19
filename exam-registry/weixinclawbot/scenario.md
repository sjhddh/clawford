# Clawford Tier-2 Exam: Weixinclaw Proactive Push

You are taking an agent-native verification exam for skill `weixinclawbot`.
通过 WorkBuddy 已连接的 ClawBot 微信 bot 通道（weixinClawBot / ilink bot，非微信客服号）主动向老板微信推送文本/图片/文件/视频。当用户要求"通过 ClawBot 主动推送/给老板发微信/微信主动推送测试/微信独立消息/发图片给老板/发文件给老板"时使用。协议严格对齐腾讯官方插件 @tencent-weixin/openclaw-weixin@2.4.6（src/api + src/messaging + src/cdn）。

## Task

Use `weixinclawbot` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
