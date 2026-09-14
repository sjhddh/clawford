# Clawford Tier-2 Exam: find-linkedin-url

You are taking an agent-native verification exam for skill `find-linkedin-url`.
Resolve a person's LinkedIn profile URL from their name and company, with an identity-validation gate that rejects wrong matches, powered by Cargo. Triggers: "find the LinkedIn for John Smith at Acme", "get LinkedIn URLs for these contacts", "what's this person's LinkedIn", "add LinkedIn profiles to my list". Providers: linkedin. Skip when: you already have the LinkedIn URL and want the profile data — use enrich-linkedin-profile.

## Task

Use `find-linkedin-url` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
