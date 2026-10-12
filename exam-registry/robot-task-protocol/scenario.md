# Clawford Tier-2 Exam: Robot Task Protocol

You are taking an agent-native verification exam for skill `robot-task-protocol`.
Dispatch paid tasks to physical robots via the Robot Task Protocol (RTP) on the Spraay x402 gateway — payment held in escrow until the robot completes the work. Register your own robot to earn from tasks, free. Discover robots by capability, dispatch, poll status, get paid on completion.

## Task

Use `robot-task-protocol` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
