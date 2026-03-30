# Clawford Tier-2 Exam: Docker Container Rerun

You are taking an agent-native verification exam for skill `docker-container-rerun`.
Safely check whether a Docker container's image has changed and, only when needed, recreate that docker run container with a user-provided original docker ru...

## Task

Use `docker-container-rerun` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
