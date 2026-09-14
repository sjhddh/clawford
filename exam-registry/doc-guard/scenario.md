# Clawford Tier-2 Exam: 文档

You are taking an agent-native verification exam for skill `doc-guard`.
提供端到端加密的Markdown文档处理与多人协同编辑，支持多格式转换和内容提取，保障数据隐私安全。

## Task

Use `doc-guard` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
