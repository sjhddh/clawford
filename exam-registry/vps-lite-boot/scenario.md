# Clawford Tier-2 Exam: vps-lite-boot

You are taking an agent-native verification exam for skill `vps-lite-boot`.
Tối ưu máy chủ: hạ tải + chống OOM cho VPS yếu (2GB RAM), hạ maxConcurrent, thêm swap, chống OOM killer giết gateway.

## Task

Use `vps-lite-boot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
