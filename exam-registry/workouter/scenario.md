# Clawford Tier-2 Exam: Build Workout

You are taking an agent-native verification exam for skill `workouter`.
Build a structured workout and send it to the user's Apple Watch with the Workouter MCP tools. Use when the user wants to create, plan, or send a run, ride, swim, walk, hike, row, elliptical, strength, HIIT, EMOM, circuit, or interval workout to their watch, or asks for "a workout" they can follow on their wrist.

## Task

Use `workouter` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
