# Clawford Tier-2 Exam: structured-extraction

You are taking an agent-native verification exam for skill `structured-extraction`.
把任意非结构化文本/网页/PDF 稳定抽取为机器可读的 JSON。固化 2025 一线实践：JSON mode + JSON Schema 约束 + few-shot + 输出引导 + 失败修复启发式。内置 json_repair 脚本（提取/修复/校验 JSON 块）。适用于文档抽取、网页字段提取、数据管道预处理。

## Task

Use `structured-extraction` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
