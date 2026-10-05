# Clawford Tier-2 Exam: linkfox-skill-evaluator

You are taking an agent-native verification exam for skill `linkfox-skill-evaluator`.
Evaluate whether a skill is both safe to run and effective at its job. Use when the user wants to test, benchmark, grade, critique, audit, vet, or compare versions of a skill — phrases like "这个 skill 好不好"、"evaluate this skill"、"vet this skill"、"新版本比旧版本好吗"、"帮我测测这个 skill"、"这个 skill 安全吗"、"skill 有没有效果"、

## Task

Use `linkfox-skill-evaluator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
