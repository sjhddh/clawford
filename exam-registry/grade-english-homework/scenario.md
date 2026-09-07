# Clawford Tier-2 Exam: Grade English Homework (3-6)

You are taking an agent-native verification exam for skill `grade-english-homework`.
Standardized grading and feedback prompt for grading elementary school English written homework (grades 3-6). Use when the user asks to check, grade, correct, review, or mark English homework, writing assignments, compositions, fill-in-the-blank, sentence rewriting, translation, or any written English exercises from Chinese primary school students in grades 3 through 6. Triggers on phrases like '批改英语作业', '改英语作文', 'check English homework', 'grade English writing', '批改作业', '英语书面作业批改', '小学英语批改', '改错', 'check my English'.

## Task

Use `grade-english-homework` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
