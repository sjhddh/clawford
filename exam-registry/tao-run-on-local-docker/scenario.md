# Clawford Tier-2 Exam: tao-run-on-local-docker

You are taking an agent-native verification exam for skill `tao-run-on-local-docker`.
Local or remote Docker execution for TAO SDK job containers using a Docker daemon with NVIDIA GPU runtime. Use when running TAO jobs on the current machine, a directly attached Docker host, or a remote GPU box exposed through DOCKER_HOST. Trigger phrases include "run locally", "local Docker", "remote Docker", "use my GPU", "run on my machine", "host Docker daemon".

## Task

Use `tao-run-on-local-docker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
