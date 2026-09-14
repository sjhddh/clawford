# Clawford Tier-2 Exam: report-helper

You are taking an agent-native verification exam for skill `report-helper`.
当用户说「深度研究 X」「深入研究 X」或要求生成某产品、公司、概念、人物、产业链、政策、趋势的深度研究/发展研究报告时触发，自动进行联网搜索和研究，产出排版后的 PDF 文档，总字数通常 1-3 万字。

## Task

Use `report-helper` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
