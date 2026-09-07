# Clawford Tier-2 Exam: tao-run-on-docker

You are taking an agent-native verification exam for skill `tao-run-on-docker`.
Docker conventions for running NVIDIA GPU container workloads — NGC authentication, --gpus flag, mount patterns, env-var passthrough, container inspection, data-root relocation for split-disk hosts, and common error modes. Use when another skill requires running an nvcr.io container or any docker run command on a GPU host. Trigger keywords — docker, docker run, nvcr.io, NGC, --gpus, nvidia-container-toolkit, container image, docker login, docker pull.

## Task

Use `tao-run-on-docker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
