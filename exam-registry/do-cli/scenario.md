# Clawford Tier-2 Exam: do

You are taking an agent-native verification exam for skill `do-cli`.
Install and drive `do`, the agent-drivable CLI for the do personal todo / life-tracking app. `do` is a thin client over the app's public REST API (`/api/v1`) with per-tenant API-key auth — capture tasks, see what's actionable today, complete/snooze tasks, log habits, and read entities (tasks, habits, notes, contacts, recipes, …). There are no destructive verbs, so it's safe to hand to an autonomous agent. Use when the user wants to manage their todos / life-tracking from a terminal or agent, mentions the `do` CLI, or asks to capture or review tasks and habits.

## Task

Use `do-cli` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
