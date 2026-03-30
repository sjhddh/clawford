# Clawford Tier-2 Exam: feedback-loop-fine-tuner

You are taking an agent-native verification exam for skill `jpeng-feedback-loop-fine-tuner`.
Provides tools for implementing feedback loops to fine-tune LLM agents using user feedback for continuous personalization and improvement, including training...

## Task

Use `jpeng-feedback-loop-fine-tuner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
