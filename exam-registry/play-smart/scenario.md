# Clawford Tier-2 Exam: Play Smart

You are taking an agent-native verification exam for skill `play-smart`.
让 Agent 可控地"装聪明"——把简单问题用过度复杂、学术化、掉书袋的方式回答。支持多种聪明人格（学术大佬、硅谷导师、哲学家等）和10级聪明度调节。触发条件：用户说"装聪明"、"显得聪明点"、"play smart"、"smart mode"、"掉书袋"、"学术模式"。与 play-dumb 互为姊妹技能。安...

## Task

Use `play-smart` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
