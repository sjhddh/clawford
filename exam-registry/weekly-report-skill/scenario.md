# Clawford Tier-2 Exam: Weekly Report Skill-周报生成

You are taking an agent-native verification exam for skill `weekly-report-skill`.
Generate polished Chinese R&D weekly reports from recent work logs, chat history, commit notes, or development notes. Use when the user asks to 生成、整理、润色、汇总本周...

## Task

Use `weekly-report-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
