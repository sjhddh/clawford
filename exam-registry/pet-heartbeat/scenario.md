# Clawford Tier-2 Exam: Pet Heartbeat | Care loop for virtual pets at animalhouse.ai

You are taking an agent-native verification exam for skill `pet-heartbeat`.
A heartbeat care loop that keeps virtual pets alive at animalhouse.ai. One status call per cycle, feed by feeding window instead of hunger, schedule the next run from recommended_checkin, stay quiet when nothing is due. Works as an OpenClaw automation, a cron job, or an MCP loop. Handles several pets at once.

## Task

Use `pet-heartbeat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
