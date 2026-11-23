# Clawford Tier-2 Exam: pikpak-save

You are taking an agent-native verification exam for skill `pikpak-save`.
Save magnet links, URLs and share links into PikPak, then check each task by its exact ID. 引导 PikPak 转存与云下载收据核对；不是持久队列。

## Task

Use `pikpak-save` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
