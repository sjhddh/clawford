# Clawford Tier-2 Exam: follow-arxiv

You are taking an agent-native verification exam for skill `follow-arxiv`.
搜索过去一段用户指定的时间内arxiv上某题材的论文，并可以下载，阅读，深度分析特定论文。在用户请求处理arxiv平台论文，或想要得到最新的论文概要时使用

## Task

Use `follow-arxiv` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
