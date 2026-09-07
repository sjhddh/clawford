# Clawford Tier-2 Exam: generic-fto-report

You are taking an agent-native verification exam for skill `generic-fto-report`.
根据风险点 Word 文档和用户提供的 PatSnap 检索式生成通用行业专利 FTO 报告。适用于专利风险分析师提供目标产品/技术特征及一个或多个直接检索式，并希望 Codex 执行 P002 专利检索、用 P018 获取权利要求 1、运行 AI07 辅助侵权比对，并输出可追溯 FTO 报告的场景。

## Task

Use `generic-fto-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
