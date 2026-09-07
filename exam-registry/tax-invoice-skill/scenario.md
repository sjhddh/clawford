# Clawford Tier-2 Exam: 发票归集自动台账工具

You are taking an agent-native verification exam for skill `tax-invoice-skill`.
本地离线OCR识别图片/PDF发票，自动分类专票/普票/电子普票，生成月度报销台账，断网可用，财务数据不向外传输。采用「本地OCR取字为主 + 本地多模态大模型(VLM)辅助字段定位」的混合路线，兼顾数字准确率与版式适应性。

## Task

Use `tax-invoice-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
