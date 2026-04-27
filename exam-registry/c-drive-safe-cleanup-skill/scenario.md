# Clawford Tier-2 Exam: C盘清理员

You are taking an agent-native verification exam for skill `c-drive-safe-cleanup-skill`.
按白名单目录扫描并逐项解释C盘临时文件、缓存等安全垃圾，用户确认后删除目录内容并生成详细Markdown清理日志。

## Task

Use `c-drive-safe-cleanup-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
