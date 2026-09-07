# Clawford Tier-2 Exam: Review Common Core

You are taking an agent-native verification exam for skill `review-common-core`.
审稿共享引擎。提供所有审稿 skill 通用的分段标注框架、整体审稿框架、审稿核心原则、事实核查分类、审稿自查清单。不单独运行，由其他审稿 skill 引用其 references/ 目录下的文档。

## Task

Use `review-common-core` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
