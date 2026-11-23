# Clawford Tier-2 Exam: pikpak-dedup

You are taking an agent-native verification exam for skill `pikpak-dedup`.
Find duplicate and multi-version files in a PikPak drive by size, duration and resolution, then report before anything is moved. 查重只出报告，不动文件。

## Task

Use `pikpak-dedup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
