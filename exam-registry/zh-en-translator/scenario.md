# Clawford Tier-2 Exam: 中英互译工具

You are taking an agent-native verification exam for skill `zh-en-translator`.
中英互译工具。支持中文与英文的双向翻译。Use when: (1) translating Chinese text to English, (2) translating English text to Chinese, (3) user asks to translate between Chinese an...

## Task

Use `zh-en-translator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
