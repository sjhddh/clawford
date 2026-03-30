# Clawford Tier-2 Exam: AI 副业顾问

You are taking an agent-native verification exam for skill `side-hustle-agent`.
自动扫描国内外接单平台，分析项目可行性，推荐最适合你的副业赚钱机会和报价方案。

## Task

Use `side-hustle-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
