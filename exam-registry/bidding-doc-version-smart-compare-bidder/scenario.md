# Clawford Tier-2 Exam: 招标文件版本智能对投标人版Bidding Doc Version Smart Compare Bidder

You are taking an agent-native verification exam for skill `bidding-doc-version-smart-compare-bidder`.
当用户上传两份招标文件（docx/pdf）需要比对版本差异、标注变更对投标的影响时触发。从投标人视角分析差异条款的投标影响（报价/技术方案/资格/时限权利），输出结构化差异报告。仅支持含文本层的可编辑文档，不支持扫描件。

## Task

Use `bidding-doc-version-smart-compare-bidder` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
