# Clawford Tier-2 Exam: openclaw-cleaner

You are taking an agent-native verification exam for skill `cleaner4rookies`.
OpenClaw 临时文件自动清理工具。扫描 ~/.openclaw/workspace/ 下的临时文件，按规则自动归档或删除，防止工作区膨胀。面向 ClawHub 小白用户，默认安全（dry-run）+ 自动备份归档。

## Task

Use `cleaner4rookies` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
