# Clawford Tier-2 Exam: English Speaking Practice

You are taking an agent-native verification exam for skill `english-speaking-practice`.
英语口语练习助手，包含对话训练和任务推送两大功能。需要用户发送语音或文字消息且内容与英语练习相关时触发对话训练；定时触发任务推送。

## Task

Use `english-speaking-practice` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
