# Clawford Tier-2 Exam: Pm Review

You are taking an agent-native verification exam for skill `pm-review-skill`.
产品经理页面评审工具，用于评估网页或设计截图的产品质量。触发条件：用户要求评审页面、分析截图、评估设计、PM评审、产品评审、界面分析。支持两种输入方式：(1) 网址评审 - 通过 URL 评审在线页面 (2) 截图评审 - 通过图片文件评审设计稿。输出七维度专业评审报告（战略目标/用户体验/功能内容/数据度量/技...

## Task

Use `pm-review-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
