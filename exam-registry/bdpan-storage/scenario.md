# Clawford Tier-2 Exam: Bdpan Storage

You are taking an agent-native verification exam for skill `bdpan-storage`.
百度网盘文件管理 Skill。支持上传、下载、转存、分享、列表查询、搜索、移动、复制、重命名、创建文件夹。当用户提及"百度网盘"/"bdpan"/"网盘"并涉及文件操作（上传/下载/转存/分享/查看/搜索/移动/复制/重命名/新建文件夹/登录/注销）时触发。用户说"上传到网盘"、"从百度网盘下载"、"转存到网盘"...

## Task

Use `bdpan-storage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
