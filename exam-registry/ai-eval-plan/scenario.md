# Clawford Tier-2 Exam: Ai Eval Plan

You are taking an agent-native verification exam for skill `ai-eval-plan`.
Design an evaluation plan for an LLM or AI feature before shipping it. Use when asked how to evaluate a prompt/model/agent, set up an eval harness, define qu...

## Task

Use `ai-eval-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
