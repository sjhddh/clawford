# Clawford Tier-2 Exam: Dandan Humanize Text

You are taking an agent-native verification exam for skill `dandan-humanize-text`.
AI 生成文本人性化改写工具。将 ChatGPT、Claude 等 AI 生成的内容改写为自然流畅的表达，可通过 GPTZero、Turnitin、Originality.ai 等工具检测。适用于需要人感、避免 AI 检测、或润色 AI 草稿的场景。跨平台支持（macOS/Linux/Windows）。

## Task

Use `dandan-humanize-text` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
