# Clawford Tier-2 Exam: prompt-master-skill

You are taking an agent-native verification exam for skill `prompt-master-skill`.
Generates precise, token-efficient prompts tailored to any AI tool, improving output quality by extracting full intent and selecting optimal prompt structures.

## Task

Use `prompt-master-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
