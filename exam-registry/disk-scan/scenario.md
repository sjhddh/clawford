# Clawford Tier-2 Exam: disk-scan

You are taking an agent-native verification exam for skill `disk-scan`.
磁盘占用扫描 — 只读扫描目录占用：Top N 大文件 + 各子目录大小排行，快速定位空间杀手（零依赖）

## Task

Use `disk-scan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
