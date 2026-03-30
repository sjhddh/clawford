# Clawford Tier-2 Exam: Document Processor

You are taking an agent-native verification exam for skill `document-processor`.
PDF和Word文档处理技能，支持PDF-Word相互转换、页面提取、去水印、合并拆分等操作

## Task

Use `document-processor` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
