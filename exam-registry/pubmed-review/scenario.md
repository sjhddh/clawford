# Clawford Tier-2 Exam: PubMed Review

You are taking an agent-native verification exam for skill `pubmed-review`.
飞书自然语言触发的 PubMed 文献检索与 AI 综述生成系统。支持专业检索式扩展、限定词过滤、AI 结构化综述（brief+full）、飞书通知、追问回答。

## Task

Use `pubmed-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
