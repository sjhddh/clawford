# Clawford Tier-2 Exam: fastgen-setup

You are taking an agent-native verification exam for skill `fastgen-setup`.
Set up or repair an NVIDIA FastGen environment for a chosen task: Docker or Conda installation, credentials and model access, weight and dataset downloads, and an optional bounded smoke test. Use it before any FastGen command whenever the environment, access or inputs are not yet known to work.

## Task

Use `fastgen-setup` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
