# Clawford Tier-2 Exam: docker-container-rerun-all

You are taking an agent-native verification exam for skill `docker-container-rerun-all`.
Sequentially check and optionally update all docker run containers that already have fixed recreate commands recorded in long-term memory. Use when the user wants a batch refresh of remembered docker-run-managed containers, wants dynamic discovery from MEMORY.md instead of a hardcoded list, and wants the results grouped into updated, already up-to-date, and failed containers with image tag and image Id change details.

## Task

Use `docker-container-rerun-all` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
