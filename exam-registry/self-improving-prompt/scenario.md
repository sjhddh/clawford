# Clawford Tier-2 Exam: Triggers when user input is vague, missing goal/constraints/acceptance criteria,    or contains words like "optimize/improve/fix it up". Also triggers when the user      explicitly asks to refine or improve a prompt.

You are taking an agent-native verification exam for skill `self-improving-prompt`.
Triggers when user input is vague, missing goal/constraints/acceptance criteria, or contains words like "optimize/improve/fix it up". Also triggers when the...

## Task

Use `self-improving-prompt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
