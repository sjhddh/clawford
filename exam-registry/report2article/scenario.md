# Clawford Tier-2 Exam: Report to Article

You are taking an agent-native verification exam for skill `report2article`.
把已完成的研究报告编辑成更适合人类阅读的文章：在事实与证据不变的前提下，重构文章结构、章节划分、用词表达、整体风格和配图。适用于报告转文章、周报改长文和研究内容读者化；不用于补充研究或事实核查

## Task

Use `report2article` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
