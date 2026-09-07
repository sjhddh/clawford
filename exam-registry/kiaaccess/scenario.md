# Clawford Tier-2 Exam: kiaaccess

You are taking an agent-native verification exam for skill `kiaaccess`.
This skill should be used when the user asks about their Kia vehicle through the Kia Access / Kia Owners account. Triggers on phrases like "is the car locked", "unlock the Kia", "start the car's climate", "warm up the car", "where is my car", "what's the EV charge at", "check the car's battery", "lock the doors", or any request to read or command a Kia vehicle.

## Task

Use `kiaaccess` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
