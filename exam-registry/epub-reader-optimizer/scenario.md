# Clawford Tier-2 Exam: Epub Reader Optimizer

You are taking an agent-native verification exam for skill `epub-reader-optimizer`.
优化 EPUB 文件的阅读体验：重写 CSS、统一中英文双语段落排版、强制字体（如 LXGW WenKai）、美化代码块与表格、解决阅读器白底白字问题。当用户需要美化/优化 EPUB 排版、修复 EPUB 显示异常、调整 EPUB 字体或颜色时调用。

## Task

Use `epub-reader-optimizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
