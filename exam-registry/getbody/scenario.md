# Clawford Tier-2 Exam: GetBody

You are taking an agent-native verification exam for skill `getbody`.
Get real-world physical tasks done by robots. Use whenever the user needs something done in the physical world that they can't or don't want to do themselves — moving heavy boxes or furniture, gardening, mowing, weeding, clearing snow, cleaning, fetching items, checking on a place while they're away, sorting or inspecting things — even if they never mention robots.

## Task

Use `getbody` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
