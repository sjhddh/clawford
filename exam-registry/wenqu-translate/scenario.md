# Clawford Tier-2 Exam: 文曲·翻译

You are taking an agent-native verification exam for skill `wenqu-translate`.
将 README、论文、源码注释、文档和英文文章等材料翻译成自然中文，供中文内容创作与阅读 使用。当用户要求“翻译一下”“把这段英文翻译成中文”或“译成中文”，或使用 "translate to Chinese", "translate this README", "translate this paper" 等英文表达时使用。

## Task

Use `wenqu-translate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
