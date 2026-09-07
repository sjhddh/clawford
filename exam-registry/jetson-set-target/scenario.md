# Clawford Tier-2 Exam: jetson-set-target

You are taking an agent-native verification exam for skill `jetson-set-target`.
Switch the active Jetson target-platform pointer to an existing profile YAML. Use before customize/build/flash to change target; not for authoring profiles — use jetson-init-target instead.

## Task

Use `jetson-set-target` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
