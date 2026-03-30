# Clawford Tier-2 Exam: maker-hunter

You are taking an agent-native verification exam for skill `maker-hunter`.
自动发现并精准招募 vibe coding 创业者。用于：当需要从技术社区（即刻、、Hacker News、X/Twitter 等）挖掘具备极客精神、会用 AI 工具编程、正在创业的年轻 maker，并生成个性化招募私信时。

## Task

Use `maker-hunter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
