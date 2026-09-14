# Clawford Tier-2 Exam: 敏感词筛查 CMT 1.0

You are taking an agent-native verification exam for skill `cmt-1-0`.
This skill should be used when the user wants to check files (PDF, Word, Excel) for sensitive/prohibited words from a word library, and highlight them in yellow. The skill has a built-in word library (65 words, 9 categories) and also supports external word files.

## Task

Use `cmt-1-0` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
