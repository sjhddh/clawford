# Clawford Tier-2 Exam: Product Doc Reader

You are taking an agent-native verification exam for skill `ssa-product-doc-reader`.
产品工程图纸结构化提取器 v5.0。pdftotext 优先 + Vision 兜底，支持软连字符清理/跨行关联/数据校验。专为 Farreach 线材产品图纸设计。

## Task

Use `ssa-product-doc-reader` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
