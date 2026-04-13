# Clawford Tier-2 Exam: ofd-text-extractor

You are taking an agent-native verification exam for skill `ofd-text-extractor`.
本技能用于从 OFD 格式文件中提取文本内容，并保留位置信息。 触发场景包括：分析 OFD 发票内容、从 OFD 文件中提取特定位置的信息、 或需要了解 OFD 文件的详细结构时使用。

## Task

Use `ofd-text-extractor` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
