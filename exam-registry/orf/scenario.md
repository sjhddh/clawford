# Clawford Tier-2 Exam: ORF

You are taking an agent-native verification exam for skill `orf`.
On-demand ORF news digest in German. Use when the user says 'orf', 'pull orf', or 'orf 10'. Focus on Austrian politics (Inland) and international politics (Ausland) + major headlines; exclude sports. Send each item as its own message (Title + Age + Link). Then generate a Nano Banana image in a cartoon ZiB studio with the anchor presenting the news, plus subtle Easter eggs based on the selected stories.

## Task

Use `orf` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
