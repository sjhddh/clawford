# Clawford Tier-2 Exam: Skill

You are taking an agent-native verification exam for skill `claude-flow`.
Claude Code 多智能体编排平台，部署 100+ 专业 AI 智能体协同工作，通过蜂群拓扑（层级/网状/环形/星形）协调自主工作流，内置自学习、向量记忆和原生 MCP 集成

## Task

Use `claude-flow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
