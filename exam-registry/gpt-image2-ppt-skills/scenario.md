# Clawford Tier-2 Exam: gpt-image2-ppt-skills

You are taking an agent-native verification exam for skill `gpt-image2-ppt-skills`.
Generate visually striking PPT slides via OpenAI's gpt-image-2 -- use any style in styles/<id>.md or mimic a user-supplied .pptx template; outputs high-res s...

## Task

Use `gpt-image2-ppt-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
