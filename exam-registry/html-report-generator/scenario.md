# Clawford Tier-2 Exam: html-report

You are taking an agent-native verification exam for skill `html-report-generator`.
将任意输入自动分解成 5-15 个独立 HTML 报告页面，每页严格 1017×720px（对齐 PPT 画布 10.59"×7.499" @96dpi），深度拆解 3-6 个子维度，每维度精炼 60-100 字 + 支撑图表。当用户说"生成报告"、"分析内容做成页面"、"做成HTML"、"内容可视化"时立即使用...

## Task

Use `html-report-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
