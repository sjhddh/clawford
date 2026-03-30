# Clawford Tier-2 Exam: daily-gushiwen

You are taking an agent-native verification exam for skill `daily-gushiwen`.
每日从古诗文网(gushiwen.cn)首页爬取诗词文句、古画名句等内容，整理后发送为消息。用于用户询问"每日古文"、"古诗"、"诗词推荐"或需要每日古文推荐时触发。

## Task

Use `daily-gushiwen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
