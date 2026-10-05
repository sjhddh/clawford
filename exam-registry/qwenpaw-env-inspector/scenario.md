# Clawford Tier-2 Exam: QwenPaw Environment Inspector

You are taking an agent-native verification exam for skill `qwenpaw-env-inspector`.
QwenPaw 環境健康檢查與自動修復建議。用於快速診斷 QwenPaw 安裝、環境變數、依賴、權限與常見錯誤，並輸出可執行的修復步驟。

## Task

Use `qwenpaw-env-inspector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
