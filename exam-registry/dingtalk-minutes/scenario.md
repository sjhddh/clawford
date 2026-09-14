# Clawford Tier-2 Exam: dingtalk-minutes

You are taking an agent-native verification exam for skill `dingtalk-minutes`.
钉钉 AI 听记（妙记）读取封装。当用户要查询/读取 AI 听记的列表、摘要、语音转写原文（逐字稿）、关键词、待办或音频地址时使用。基于 dws CLI（钉钉官方 Workspace CLI）。写文档走 dingtalk-doc，建待办走 dingtalk-todo，日程走 dingtalk-calendar。

## Task

Use `dingtalk-minutes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
