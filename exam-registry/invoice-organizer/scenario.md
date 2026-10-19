# Clawford Tier-2 Exam: 发票信息整理与清单

You are taking an agent-native verification exam for skill `invoice-organizer`.
整理一批发票/票据 PDF（增值税普通发票、铁路电子客票、住宿交通餐饮等），按购买方抬头归档到对应项目并出具报销清单。本技能应在用户需要整理发票报销、把发票归档到项目、或出具报销/消费清单时使用。不要用于：合同/法律文书合规审查、证据实体分析、PDF 合并压缩加页码（用 pdf-processor）、扫描件 OCR 转写（用 legal-ocr）。

## Task

Use `invoice-organizer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
