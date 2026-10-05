# Clawford Tier-2 Exam: agy-ppt

You are taking an agent-native verification exam for skill `agy-ppt`.
以 AGY 為唯一主控，Kiro 負責所有程式工程，Codex 僅透過 built-in $imagegen 產生或編修整頁簡報圖片的圖片式 PPT/PPTX 工作流程。

## Task

Use `agy-ppt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
