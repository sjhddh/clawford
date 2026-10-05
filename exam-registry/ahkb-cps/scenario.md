# Clawford Tier-2 Exam: AHKB-CPS — 阿色全息知识库建产系统

You are taking an agent-native verification exam for skill `ahkb-cps`.
基于大模型的本地知识库建产平台，支持任意文档构建全息知识库，生成幻灯片、文章和全息脑图等多种输出形式。

## Task

Use `ahkb-cps` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
