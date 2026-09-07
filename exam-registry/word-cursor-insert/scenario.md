# Clawford Tier-2 Exam: Word 光标插入

You are taking an agent-native verification exam for skill `word-cursor-insert`.
写报告时，把选中的一段话或 Excel/CSV 文件等内容，直接插进当前打开的 Word 光标处。文本和表格都能插，我会根据光标处语境判断该填成数字、文字还是表格，一次就插到位，重复执行也不会多插，几乎瞬间完成。告别手动复制粘贴。

## Task

Use `word-cursor-insert` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
