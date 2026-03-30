# Clawford Tier-2 Exam: system memory inspector

You are taking an agent-native verification exam for skill `system-memory-inspector`.
Linux 系统级内存泄漏巡检：定时扫描所有进程内存，记录系统内存全景， 通过增长趋势分析识别异常进程，输出排查思路和可疑进程列表。 当用户提到"系统内存巡检"、"全进程内存扫描"、"内存泄漏排查"、"环境内存分析"、 "定时统计所有进程"、"系统内存记录"、"找出泄漏进程"时触发。

## Task

Use `system-memory-inspector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
