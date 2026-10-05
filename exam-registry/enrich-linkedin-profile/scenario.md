# Clawford Tier-2 Exam: enrich-linkedin-profile

You are taking an agent-native verification exam for skill `enrich-linkedin-profile`.
Turn a LinkedIn profile URL into a full person profile plus a verified work email in a single call, powered by Cargo. Triggers: "enrich these LinkedIn profiles", "get details from this LinkedIn URL", "I have LinkedIn URLs and need emails", "enrich LinkedIn data", "who is this person", "contact enrichment", "linkedin enrichment", "get their headline and tenure", "pull the whole biography". Providers: aiArk. Skip when: you do not have the LinkedIn URL yet — use find-linkedin-url first; or you only have a name and domain — use find-work-email.

## Task

Use `enrich-linkedin-profile` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
