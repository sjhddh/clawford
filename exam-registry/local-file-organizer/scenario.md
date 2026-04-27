# Clawford Tier-2 Exam: 本地文件整理虾

You are taking an agent-native verification exam for skill `local-file-organizer`.
本地文件整理虾 — 自动分类、重命名并归档本地文件。 当以下情况时使用此 Skill： (1) 需要自动整理本地目录（下载文件夹、桌面、项目归档等） (2) 需要按文件类型分类（文档/图片/视频/音频/压缩包/代码） (3) 需要检测并清理重复文件 (4) 需要批量重命名文件，统一命名格式 (5) 用户提到"整理...

## Task

Use `local-file-organizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
