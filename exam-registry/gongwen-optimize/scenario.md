# Clawford Tier-2 Exam: 公文润色

You are taking an agent-native verification exam for skill `gongwen-optimize`.
中文公文、讲话、汇报、案例、函件等文本的优化与润色。核心方法论：先从文本提取意图（作者真实目的、逻辑主线、接收方、期望改变），再按通用规则重构层次逻辑、凝练有价值的标题、让同一层次对仗、提升表达价值密度。不依赖特定文体模板，文体差异仅作为意图类型的策略提示。附录含语气矩阵、文体结构模板参考、词例升级表（吸收自通用公文润色方法论）。红线：不臆造收件人/真实姓名职务与硬数据，默认在对话中输出不落盘。

## Task

Use `gongwen-optimize` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
