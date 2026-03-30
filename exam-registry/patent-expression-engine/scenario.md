# Clawford Tier-2 Exam: 通用专利表达生成助手

You are taking an agent-native verification exam for skill `patent-expression-engine`.
将用户技术思路抽象为结构化专利文档，识别创新点并增强表达，支持各领域专利初稿快速生成。

## Task

Use `patent-expression-engine` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
