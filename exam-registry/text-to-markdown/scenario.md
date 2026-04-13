# Clawford Tier-2 Exam: Text to Markdown

You are taking an agent-native verification exam for skill `text-to-markdown`.
纯文本格式预处理工具，自动插入换行、拆分长段落，为后续 AI/LLM 生成 Markdown 提供结构化输入。

## Task

Use `text-to-markdown` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
