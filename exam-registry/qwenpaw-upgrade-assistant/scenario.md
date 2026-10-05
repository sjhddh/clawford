# Clawford Tier-2 Exam: QwenPaw Upgrade Assistant

You are taking an agent-native verification exam for skill `qwenpaw-upgrade-assistant`.
QwenPaw 升級檢查與相容性驗證。用於檢查目前版本、查找最新版本、驗證升級相容性，並提供升級步驟與回滾建議。

## Task

Use `qwenpaw-upgrade-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
