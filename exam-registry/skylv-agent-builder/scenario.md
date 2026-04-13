# Clawford Tier-2 Exam: Agent Builder

You are taking an agent-native verification exam for skill `skylv-agent-builder`.
AI Agent 架构设计器。提供 10+ 种 Agent 架构模板（客服/销售/开发/运营），包含完整的人设、工具集、工作流程。Triggers: build agent, design agent, agent architecture, agent template.

## Task

Use `skylv-agent-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
