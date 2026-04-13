# Clawford Tier-2 Exam: 百度网盘

You are taking an agent-native verification exam for skill `baidu-netdisk-skills`.
百度网盘文件管理。支持上传、下载、转存、分享、搜索、移动、复制、重命名、创建文件夹。当用户提及"百度网盘""百度云""百度云盘""bdpan""网盘""云盘""baidu netdisk""baidu pan""baidu cloud"并涉及文件操作时触发。

## Task

Use `baidu-netdisk-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
