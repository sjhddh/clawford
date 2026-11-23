# Clawford Tier-2 Exam: hubei-exam-grader

You are taking an agent-native verification exam for skill `hubei-exam-grader`.
按湖北技能高考计算机类规则批改答卷并标注八类错因标签，输出结构化判分结果。Use when the user asks 批改、判分、对答案、错因分析、阅卷 for exam answers. Do not use for generating questions or writing new content.

## Task

Use `hubei-exam-grader` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
