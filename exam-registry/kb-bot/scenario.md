# Clawford Tier-2 Exam: 越问越懂你的知识库机器人

You are taking an agent-native verification exam for skill `kb-bot`.
装了就有一个越用越懂你的资料问答机器人：问它公司文档/产品资料，答案带来源和时间；没答过的现查，答完自动记进库，下次秒答；答案过期自动提醒复核，绝不编造。触发词：问库、查库、知识库问答、内部资料、现在多少。

## Task

Use `kb-bot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
