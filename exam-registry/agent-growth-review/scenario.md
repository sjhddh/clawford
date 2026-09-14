# Clawford Tier-2 Exam: 智能体成长复盘

You are taking an agent-native verification exam for skill `agent-growth-review`.
帮助用户复盘一段时间内的学习、实践、工作和人机协作变化，自动读取已有记忆、身份、Skill、对话记录、任务结果和知识资料，追问少量关键问题，生成'AI赋能XXX成长报告'。调用时机：用户说'智能体成长复盘''生成我的AI赋能成长报告''回顾这段时间我的成长''总结我和智能体最近的变化''复盘最近的人机协作''写一份阶段性学习思想报告''更新我的成长档案'。核心能力：分析用户变化、智能体变化、人机共同形成的能力，区分事实/感受/推断/归纳，未经确认不得写回Memory。

## Task

Use `agent-growth-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
