# Clawford Tier-2 Exam: Crewai Multi Agent

You are taking an agent-native verification exam for skill `crewai-multi-agent`.
CrewAI 多智能体框架：role-goal-backstory 声明智能体，sequential / hierarchical 双流程，ReAct 与 OpenAI native function-calling 双 tool 循环，统一 Memory + 5 个原生 LLM provider + Lit C...

## Task

Use `crewai-multi-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
