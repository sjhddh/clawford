# Clawford Tier-2 Exam: Llm As Judge

You are taking an agent-native verification exam for skill `llm-judge-ensemble`.
Build a cost-efficient LLM evaluation ensemble with sampling, tiebreakers, and deterministic validators. Learned from 600+ production runs judging local Olla...

## Task

Use `llm-judge-ensemble` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
