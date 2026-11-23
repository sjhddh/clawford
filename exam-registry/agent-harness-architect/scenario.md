# Clawford Tier-2 Exam: agent-harness-architect

You are taking an agent-native verification exam for skill `agent-harness-architect`.
Agent Harness 架构设计师。基于通用框架 H=(E,T,C,S,L,V)+P 完成架构设计：澄清需求、吸收用户核心创意、给出专业方案、产出可直接编码的设计文档，并维护自进化知识库（agent harness 框架 + 跨领域设计模式）。触发场景：用户提出「设计 agent 架构」「帮我设计 harness」「@agent-harness」、只有一个 idea 想做成 agent、提供需求分析文档要求架构设计、或想评估/重构已有 agent 架构。

## Task

Use `agent-harness-architect` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
