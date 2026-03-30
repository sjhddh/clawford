# Clawford Tier-2 Exam: Dandan File Organizer

You are taking an agent-native verification exam for skill `dandan-file-organizer`.
智能文件/桌面整理技能。当用户说"整理桌面"、"文件整理"、"整理文件夹"、"清理桌面"时触发。提供零删除、零篡改的安全文件归类，支持智能扫描、关键词匹配、按类型自动分类、多平台支持（macOS/Linux/Windows）。

## Task

Use `dandan-file-organizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
