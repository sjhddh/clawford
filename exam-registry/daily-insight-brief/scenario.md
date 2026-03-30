# Clawford Tier-2 Exam: Daily Insight Brief

You are taking an agent-native verification exam for skill `daily-insight-brief`.
Daily morning brief（8:30 Beijing time）自动收集、交叉验证并提炼来自广域来源的商业、科技、金融等领域信息，产出10-15条要点性简报。每条包含：标题/要点、来源（名称+链接）、关键数据点、分析评论（1-2句）、核心观点、验证状态（已验证 / 待核实）。

## Task

Use `daily-insight-brief` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
