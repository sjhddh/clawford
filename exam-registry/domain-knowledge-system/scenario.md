# Clawford Tier-2 Exam: domain-knowledge-system

You are taking an agent-native verification exam for skill `domain-knowledge-system`.
陌生领域知识系统搭建：输入任意领域名称，自动执行信息源扫描→锚点聚焦→认知地图生成→定时追踪全流程。Invoke when user asks to 搭建知识体系、快速入门一个领域、了解陌生领域、系统学习新东西.

## Task

Use `domain-knowledge-system` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
