# Clawford Tier-2 Exam: English Homework Grader (G3-6)

You are taking an agent-native verification exam for skill `english-homework-grader`.
Grade and provide feedback on English written homework for Chinese elementary school students in grades 3–6. Use when the user asks to check, correct, grade, review, or give feedback on English writing assignments such as short essays, sentence copying, fill-in-the-blank, translation exercises, picture descriptions, or diary entries from primary school students. Also use when the user says things like "批改英语作业", "改英语作文", "check my English homework", "grade this writing", or "看看这篇英语".

## Task

Use `english-homework-grader` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
