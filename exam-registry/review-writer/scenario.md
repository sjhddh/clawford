# Clawford Tier-2 Exam: review-writer

You are taking an agent-native verification exam for skill `review-writer`.
Data-driven writing and polishing for professional workplace documents. Use when the user asks to write or refine: (1) 述职/复盘/年终总结, (2) 简历/项目经历/STAR 改写, (3) 周...

## Task

Use `review-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
