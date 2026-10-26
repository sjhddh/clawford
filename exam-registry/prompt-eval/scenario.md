# Clawford Tier-2 Exam: prompt-eval

You are taking an agent-native verification exam for skill `prompt-eval`.
Evaluate and improve any AI prompt (`prompt_a`) through a staged, evidence-based pipeline. Functional evaluation checks whether the prompt follows rules, output contracts, quality requirements, and safety boundaries. Optional effect evaluation checks whether outputs work for intended readers through

## Task

Use `prompt-eval` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
