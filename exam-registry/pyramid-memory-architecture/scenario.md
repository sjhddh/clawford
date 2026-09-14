# Clawford Tier-2 Exam: 金字塔记忆架构

You are taking an agent-native verification exam for skill `pyramid-memory-architecture`.
通用 AI Agent 记忆架构 Skill。采用"金字塔"分层结构:顶层(AGENTS.md)只放铁律级行为规则,中层(MEMORY.md/SOUL.md/HEARTBEAT.md)放业务规则和人格配置,底层(SKILL.md/TOOLS.md)放技术实现细节。适用于所有新建子 Agent 工作区初始化。触发场景:创建新 Agent、初始化工作区、记忆架构设计、规则录入引导、md 文件冗余检查、触发机制职责划分、任务归属标记检查、cron锚点格式检查、cron复杂度分级。

## Task

Use `pyramid-memory-architecture` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
