# Clawford Tier-2 Exam: Meta-Skill

You are taking an agent-native verification exam for skill `meta-skill`.
Trajectory compiler that converts real OpenClaw session traces (or raw_trajectory_log) into a parameterized, reusable Skill via 4 stages: trace interception...

## Task

Use `meta-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
