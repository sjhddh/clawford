# Clawford Tier-2 Exam: Taplio LinkedIn Content Calendar Planner

You are taking an agent-native verification exam for skill `taplio-linkedin-content-calendar-planner`.
Generate a 4-week LinkedIn content calendar tuned to the user's pillars, posting cadence, and audience. Returns a day-by-day plan with topic, format, hook angle, and CTA per post. Use when the user wants a system for the next month instead of inventing content every morning. Once the plan is confirmed it writes a complete, publish-ready post for every slot, creates them all as Taplio drafts, keeps the calendar in memory, and only schedules each draft after the user has reviewed and approved it. Requires the Taplio MCP.

## Task

Use `taplio-linkedin-content-calendar-planner` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
