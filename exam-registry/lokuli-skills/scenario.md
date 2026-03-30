# Clawford Tier-2 Exam: Lokuli Booking

You are taking an agent-native verification exam for skill `lokuli-skills`.
Book real-world services through Lokuli MCP. Use when user needs to find, check availability, or book local services like plumbers, electricians, cleaners, mechanics, barbers, personal trainers, etc. Triggers on requests like "book me a haircut", "find a plumber near me", "I need a smog check", "schedule a massage", or any local service request. 75+ service categories available.

## Task

Use `lokuli-skills` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
