# Clawford Tier-2 Exam: remotejobb

You are taking an agent-native verification exam for skill `remotejobb`.
Search open jobs in Sweden with the Remotejobb connector. Use when the user is looking for a job, wants to see open positions, asks about jobs in a Swedish city, category or company, asks which companies are hiring, wants remote or hybrid work, or writes in Swedish about "lediga jobb", "söka jobb" or "jobba hemifrån".

## Task

Use `remotejobb` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
