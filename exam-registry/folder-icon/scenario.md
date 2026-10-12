# Clawford Tier-2 Exam: Folder Icon

You are taking an agent-native verification exam for skill `folder-icon`.
为 Windows 目录下的子文件夹批量生成并应用彩色图标。支持两种方案：(A) Tabler Icons — 集中图标目录 + 相对路径引用（默认，可整体迁移）；(B) MDI Icons — 图标直接放在每个子文件夹内部（folder.ico），无需独立图标目录。使用场景："批量设置文件夹图标"、"设置文件夹...

## Task

Use `folder-icon` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
