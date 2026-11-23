# Clawford Tier-2 Exam: plain-explanation

You are taking an agent-native verification exam for skill `plain-explanation`.
This skill should be used when the user asks to explain a concept in a way that even a 5-year-old can understand — including phrases like "通俗解释", "说人话", "讲给 5 岁听", "用大白话讲", "再简单点", "给小白讲讲", "打个比方", or any follow-up that signals the previous explanation was too complex. Every explanation is rewritten as a short, vivid, concrete story a child can picture.

## Task

Use `plain-explanation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
