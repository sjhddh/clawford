# Clawford Tier-2 Exam: brief-yourself

You are taking an agent-native verification exam for skill `brief-yourself`.
通过有界访谈、来源授权和用户校准，建立并调用以 person 为主体的 Personal Context。用于认识自己、自我探索、更新个人画像，以及在求职、写作、演讲、协作或决策任务前生成冻结 Context View、任务后审核 Context Patch。区分 fact、self_report、observation 和 inference，保留反例与未知，并限制敏感内容披露。

## Task

Use `brief-yourself` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
