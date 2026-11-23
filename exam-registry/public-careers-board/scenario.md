# Clawford Tier-2 Exam: Public careers board

You are taking an agent-native verification exam for skill `public-careers-board`.
Fetch current public job openings from one supported company careers board and report coverage. The rows are job listings of the board's current public vacancies: title, location, and the board's job URL, with source and fetch time. Supply Acxiom Workday, LiveRamp Ashby, or Magnite Workday to scripts/cli.mjs. Magnite is read only after its official careers handoff confirms the declared Workday board. Role selection stays outside the fetch. A source failure is not an empty or complete board. No wallet, signup, API key, or payment.

## Task

Use `public-careers-board` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
