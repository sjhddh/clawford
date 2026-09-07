# Clawford Tier-2 Exam: word-formatter 黑灰白

You are taking an agent-native verification exam for skill `word-formatter`.
专业 Word 文档（.docx）后期排版、合规校验与图件处理技能，专注五类客户交付型咨询报告：①财务尽职调查报告 ②法律/综合尽职调查报告 ③风险评估报告（综合/COSO）④财税风险评估报告 ⑤财务分析报告。当前版本 v1.0.0「黑灰白」(2026-07-29)：配置驱动排版、5 类报告全配置、封面专业垂直分布（+分节符）、页眉双栏（客户名左+报告类型右）、Heading 1-6 层级规范、三线表/全线表、纯 Python 结构化图件渲染器。设计语言极度克制：仅黑/白/灰三色，无任何彩色（深蓝/深红等均禁用）。当用户要求对 Word 文档进行排版、格式规范化、样式统一，或提到"按尽调/风险

## Task

Use `word-formatter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
