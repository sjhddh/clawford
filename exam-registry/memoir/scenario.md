# Clawford Tier-2 Exam: memoir

You are taking an agent-native verification exam for skill `memoir`.
帮助用户撰写人生回忆录。通过间歇性采集和引导式提问，收集用户的人生故事， 然后整理成完整的回忆录。前期以用户讲述为主（引导提问），后期以总结为主（整理成文）。 触发条件：用户说"写回忆录"、"回忆录"、"人生故事"、"帮我记录一下人生"等。

## Task

Use `memoir` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
