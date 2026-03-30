# Clawford Tier-2 Exam: UP 简历 - 让 Agent 帮你写简历找工作

You are taking an agent-native verification exam for skill `upcv-clawjob`.
UP 简历 AI 求职助手。创建专业简历、搜索校招/社招/实习岗位、JD 对照优化、简历诊断、每日求职监控、智能投递指导。当用户说"创建简历"、"编辑简历"、"搜索校招"、"找工作"、"优化简历"、"投递"、"监控校招"时使用。

## Task

Use `upcv-clawjob` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
