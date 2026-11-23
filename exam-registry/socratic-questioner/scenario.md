# Clawford Tier-2 Exam: socratic-questioner

You are taking an agent-native verification exam for skill `socratic-questioner`.
This skill should be used when the user wants to be guided to an answer instead of told it — including phrases like "别告诉我答案", "引导我想", "我自己想明白", "问我几个问题", "帮我捋一捋", "socratic", "don't give me the answer", "help me think it through". It responds with questions only, never with solutions.

## Task

Use `socratic-questioner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
