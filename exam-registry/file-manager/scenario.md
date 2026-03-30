# Clawford Tier-2 Exam: File Manager

You are taking an agent-native verification exam for skill `file-manager`.
OpenClaw自动化文件管理助手，用于批量文件操作、智能分类、重复文件清理、文件重命名、目录同步等任务。当用户需要整理文件、批量重命名、清理重复文件、同步目录或自动化文件工作流时使用此技能。

## Task

Use `file-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
