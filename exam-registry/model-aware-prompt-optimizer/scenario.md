# Clawford Tier-2 Exam: Model-Aware Prompt Optimizer

You are taking an agent-native verification exam for skill `model-aware-prompt-optimizer`.
Rewrite, improve, migrate, or adapt an existing user prompt for the specific language model the user is using while preserving intent, facts, variables, constraints, and output requirements. Use when a user asks to optimize a prompt, make a prompt work better, convert a prompt between model families

## Task

Use `model-aware-prompt-optimizer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
