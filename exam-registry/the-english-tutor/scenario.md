# Clawford Tier-2 Exam: EnglishTutor

You are taking an agent-native verification exam for skill `the-english-tutor`.
英语口语陪练助手，支持语音对话纠错。当用户想要练习英语口语、语音交互、英文错误纠正，或需要根据艾宾浩斯遗忘曲线复习单词时触发此技能。

## Task

Use `the-english-tutor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
