# Clawford Tier-2 Exam: zhz-picture-story-book

You are taking an agent-native verification exam for skill `zhz-picture-story-book`.
连环画生成器：每页一幅画+底部文字说明，支持多种画风。用于生成故事绘本、小人书、连环画、图文故事。Use when user asks to create "连环画", "故事绘本", "picture story", "illustrated story", or "picture book".

## Task

Use `zhz-picture-story-book` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
