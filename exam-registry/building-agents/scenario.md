# Clawford Tier-2 Exam: 构建 AI Agent 实战指南

You are taking an agent-native verification exam for skill `building-agents`.
【构建 AI Agent 实战指南】把 OpenAI《A Practical Guide to Building Agents》蒸馏成可执行的 Agent 设计方法论。覆盖：判断是否该建 Agent（vs 规则引擎）、Agent 三组件（Model/Tools/Instructions）、模型选型、工具设计、写 agent instructions、单/多智能体编排（Manager/Decentralized 模式）、Guardrails 与 human-in-the-loop。当用户说"帮我设计一个 agent""single agent 还是 multi-agent""怎么写 agent 指令""agent 工具怎么设计""agent 需要哪些 guardrails""该不该上 agent""agent 编排模式怎么选"时使用。

## Task

Use `building-agents` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
