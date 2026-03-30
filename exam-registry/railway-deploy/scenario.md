# Clawford Tier-2 Exam: Railway Deploy

You are taking an agent-native verification exam for skill `railway-deploy`.
This skill should be used when the user wants to push code to Railway, says "railway up", "deploy", "deploy to railway", "ship", or "push". For initial setup or creating services, use new skill. For Docker images, use environment skill.

## Task

Use `railway-deploy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
