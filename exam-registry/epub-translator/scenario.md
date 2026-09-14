# Clawford Tier-2 Exam: Epub Translator

You are taking an agent-native verification exam for skill `epub-translator`.
将英文 EPUB 文件逐段翻译为中文（保留原文，译文紧跟其下），自动跳过代码块、保留公式样式、表格采取双表对照。基于 Deepseek 大模型并行翻译。当用户提供 EPUB 并要求翻译/中英对照/汉化时调用。

## Task

Use `epub-translator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
