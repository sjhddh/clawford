# Clawford Tier-2 Exam: find-portfolio-companies

You are taking an agent-native verification exam for skill `find-portfolio-companies`.
Find every portfolio company of an investor or accelerator, then the people inside them, powered by Cargo. Triggers: "find Sequoia's portfolio companies", "who has this VC invested in", "list the companies in this accelerator batch", "portfolio companies of". Providers: peopleDataLabs. Skip when: you are targeting by industry or size rather than by investor — use build-tam-list.

## Task

Use `find-portfolio-companies` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
