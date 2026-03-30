# Clawford Tier-2 Exam: Tree Of Thoughts

You are taking an agent-native verification exam for skill `tree-of-thoughts`.
Multi-path reasoning for complex problems. Explore multiple solution branches → Evaluate each → Select optimal path. Use for: difficult decisions, creative p...

## Task

Use `tree-of-thoughts` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
