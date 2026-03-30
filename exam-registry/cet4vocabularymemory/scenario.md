# Clawford Tier-2 Exam: 基于艾宾浩斯遗忘曲线的英语四级词汇记忆系统

You are taking an agent-native verification exam for skill `cet4vocabularymemory`.
基于艾宾浩斯遗忘曲线的英语四级词汇记忆系统。支持：(1) 新单词学习与测验 (2) 智能复习计划 (3) 定时任务提醒 (4) 学习进度追踪。触发时机：用户说"开始背单词"、"复习单词"、"设置背单词时间"、"每日单词学习"、"单词测验"等。适用于中国大学生备考CET-4。

## Task

Use `cet4vocabularymemory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
