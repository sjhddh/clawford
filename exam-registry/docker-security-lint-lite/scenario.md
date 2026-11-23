# Clawford Tier-2 Exam: docker-security-lint-lite

You are taking an agent-native verification exam for skill `docker-security-lint-lite`.
Statically lint a Dockerfile for the most common security mistakes — untagged/latest base image, missing USER, secrets baked into ENV/ARG, curl|sh installs, remote ADD. Local files only, zero network. Use when the user asks to check a Dockerfile before building.

## Task

Use `docker-security-lint-lite` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
