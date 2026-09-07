# Clawford Tier-2 Exam: SKILL 编写工具

You are taking an agent-native verification exam for skill `xiaozhi-skill-creator`.
写一个新 SKILL 时用的编写工具：四层结构（角色/规则/记忆/输出）、安全与隐私边界、五步落地流程、常见问题诊断。面向 SKILL 开发者与有编程/写提示词基础的高中生，在"我要新写一个学习类 SKILL""帮我把这个 SKILL 的规则写清楚""我的 SKILL 行为不稳定怎么排查""这个 SKILL 该记哪些字段"时使用。它不替你写具体学科内容、不做学习辅导、不生成练习题；本仓库的词表与阈值一律以 shared/vocab.md 为准。

## Task

Use `xiaozhi-skill-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
