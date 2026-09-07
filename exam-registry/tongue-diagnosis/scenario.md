# Clawford Tier-2 Exam: 中医舌诊（Tongue Diagnosis）

You are taking an agent-native verification exam for skill `tongue-diagnosis`.
很多身体的亚健康状态，都是可以依靠中医舌诊（舌象分析）技能,进行分析和诊断的，希望通过这个skill，每天上传舌苔照片，进行医学诊断，给出分析结论。

## Task

Use `tongue-diagnosis` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
