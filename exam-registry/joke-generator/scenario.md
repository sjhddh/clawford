# Clawford Tier-2 Exam: 中文笑话生成器

You are taking an agent-native verification exam for skill `joke-generator`.
根据用户指定的主题、场景、风格和受众创作简短、有趣且适宜的中文笑话；也可以在没有指定条件时随机讲一个笑话。

## Task

Use `joke-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
