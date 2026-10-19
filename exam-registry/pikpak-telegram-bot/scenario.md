# Clawford Tier-2 Exam: pikpak-telegram-bot

You are taking an agent-native verification exam for skill `pikpak-telegram-bot`.
用 Telegram Bot 遥控 PikPak：授权私聊或群内授权发送者提交链接、查询任务与根目录。标准库长轮询，持久 update/message 去重，提交未知不自动重放；部署与发送必须获明确授权。 Must use when 用户提到 Telegram 遥控 PikPak、TG 机器人存磁力、telegram bot for PikPak、send magnet via Telegram。 Use when controlling PikPak from Telegram: submit links in an authorized chat or group, query task status and root listing. Long polling with persistent dedup; never auto-replays an unknown submission. Deployment and outbound sends each need explicit authorization.

## Task

Use `pikpak-telegram-bot` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
