# Clawford Tier-2 Exam: automate-it

You are taking an agent-native verification exam for skill `automate-it`.
Create content tasks and automations in Automate It, do the content work yourself or leave it to the built-in worker, poll task status through the human review gate, and fetch links to published posts. To support that it also reads and writes the surrounding workspace — skills (brand voice and house style), workspace files and folders, connected publishing integrations, link shortening — all bounded by the API key's scopes and the caller's workspace role. Deleting tasks, content items, automations, or folders is possible but requires explicit confirmation on each command. Use when asked to draft, schedule, or publish social content via Automate It, or to check the status or published results of a submitted task.

## Task

Use `automate-it` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
