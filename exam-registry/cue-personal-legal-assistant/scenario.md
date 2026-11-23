# Clawford Tier-2 Exam: 个人法律助手

You are taking an agent-native verification exam for skill `cue-personal-legal-assistant`.
个人法律助手 — 大众个人遇到法律疑难问题，别急着打官司：把情况说清楚，它帮你做个性化分析、给出解决方案——拿不准的先看同类案子法院怎么判、大概赔多少；真要打官司，帮你起草起诉状、答辩状等文书或审校已有文书；还能查法规、研判问题、逐条解读、对比中外规定。每个结论都带来源链接、可逐条回查，普通人维权心里有底，律师办案更快更有据。

## Task

Use `cue-personal-legal-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
