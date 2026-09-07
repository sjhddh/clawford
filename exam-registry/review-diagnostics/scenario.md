# Clawford Tier-2 Exam: Review Diagnostics

You are taking an agent-native verification exam for skill `review-diagnostics`.
文稿审稿诊断工具集。提供事实核查、读者模拟、结构分析、传播力评估和反AI味检测等审稿技法。Use when: (1) 需要对文章/播客稿/视频脚本进行深度审稿 (2) 发现某段读起来不顺/走神/假/有AI味 (3) 用户要求逐句审稿、事实核查、结构评估。Not for: 语法检查、文字校对、帮写文章。

## Task

Use `review-diagnostics` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
