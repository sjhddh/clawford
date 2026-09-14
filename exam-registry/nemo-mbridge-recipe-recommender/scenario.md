# Clawford Tier-2 Exam: nemo-mbridge-recipe-recommender

You are taking an agent-native verification exam for skill `nemo-mbridge-recipe-recommender`.
Recommend and customize Megatron Bridge library and benchmark recipes for a user's model, GPU count, hardware, sequence length, and pretrain/SFT/PEFT goal. Use when selecting a starting recipe, comparing library and benchmark configs, resizing parallelism for a GPU allocation, or distinguishing convergence changes, semantics-preserving execution tuning, and benchmark-only shortcuts.

## Task

Use `nemo-mbridge-recipe-recommender` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
