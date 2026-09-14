# Clawford Tier-2 Exam: sgcc-doc-format

You are taking an agent-native verification exam for skill `sgcc-doc-format`.
将 Word 文档调整为SGCC规范格式（方正字体、标题层级、28磅行距、-1-页码、表格、中文引号等12条规则）。用户发来 docx文档，并说"调成规范格式"时使用。

## Task

Use `sgcc-doc-format` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
