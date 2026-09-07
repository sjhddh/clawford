# Clawford Tier-2 Exam: ofw

You are taking an agent-native verification exam for skill `ofw`.
This skill should be used when the user asks about OurFamilyWizard (OFW) co-parenting data. Triggers on phrases like "check OFW", "OurFamilyWizard inbox", "OFW messages", "OFW calendar", "OFW expenses", "what did my co-parent say", "log an expense in OFW", "OFW journal", or any request involving co-parenting messages, calendar events, shared expenses, or journal entries.

## Task

Use `ofw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
