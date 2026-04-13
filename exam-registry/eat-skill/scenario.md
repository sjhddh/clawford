# Clawford Tier-2 Exam: 干饭 skill

You are taking an agent-native verification exam for skill `eat-skill`.
干饭决策助手。帮你决定今天吃什么，发现附近餐馆，一键生成餐馆 Skill。 支持 /eat 系列命令。问"吃什么"、"附近有什么吃的"、"帮我选"时触发。

## Task

Use `eat-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
