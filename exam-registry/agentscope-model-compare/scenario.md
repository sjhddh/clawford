# Clawford Tier-2 Exam: agentscope-model-compare

You are taking an agent-native verification exam for skill `agentscope-model-compare`.
Compare multiple LLM models for use with AgentScope 2.0. Use this whenever the user wants to evaluate models, benchmark responses, or choose the best model for their agent task.

## Task

Use `agentscope-model-compare` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
