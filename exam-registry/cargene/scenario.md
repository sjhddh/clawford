# Clawford Tier-2 Exam: CarGene

You are taking an agent-native verification exam for skill `cargene`.
Japanese cars and car service in Japan, with sources. Use when the user asks about a Japanese car's generations, who developed it, its sales figures, which aftermarket parts are confirmed to fit it, or where in Japan to get a car inspection (shaken), car wash, wheel alignment or other service.

## Task

Use `cargene` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
