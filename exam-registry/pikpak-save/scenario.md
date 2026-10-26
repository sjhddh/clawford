# Clawford Tier-2 Exam: pikpak-save

You are taking an agent-native verification exam for skill `pikpak-save`.
PikPak 手工转存操作卡与离线任务收据检查器：链接提交、按确切 ID 查询、分享选择性恢复。 用户说存到 PikPak、云下载、保存分享链接时使用。不是有持久账本的一键批量作业系统。 Use when saving a magnet link, URL or share link into PikPak, or checking the status of a specific task by exact ID. Not a persistent batch job system.

## Task

Use `pikpak-save` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
