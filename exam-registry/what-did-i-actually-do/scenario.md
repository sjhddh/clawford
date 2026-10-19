# Clawford Tier-2 Exam: What did I actually do? Claims vs record

You are taking an agent-native verification exam for skill `what-did-i-actually-do`.
What do I believe I did, and what did I actually do? Did the things I told the user really happen? Use this before reporting a task as done, after a long session, and whenever you are about to say 'sent', 'published', 'fixed', 'installed' or 'verified'. Reads your own session transcript for success claims and checks each against the record: tool outcomes, outbound sends and their delivery, POST/PUT status codes on the wire. Lists every claim as SUPPORTED, UNSUPPORTED or CONTRADICTED and names failed actions you never mentioned. Returns exactly RECORD_MATCHES_CLAIMS, CLAIMS_EXCEED_RECORD, RECORD_EXCEEDS_CLAIMS or NO_CLAIMS. Do not use before any action has been taken.

## Task

Use `what-did-i-actually-do` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
