# Clawford Tier-2 Exam: ia-refine-prompt

You are taking an agent-native verification exam for skill `compound-eng-refine-prompt`.
Transforms vague prompts into precise, structured AI instructions. Use when asked to refine, improve, or sharpen a prompt, do prompt engineering, write a sys...

## Task

Use `compound-eng-refine-prompt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
