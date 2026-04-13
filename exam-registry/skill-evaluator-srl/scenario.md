# Clawford Tier-2 Exam: skill-evaluator-srl

You are taking an agent-native verification exam for skill `skill-evaluator-srl`.
对 Skill 进行质量评估打分的 Skill，输出评分报告与改进建议。评估 skill、skill 评分、SRL 评估、skill 质量、检查 skill、skill review、skill score

## Task

Use `skill-evaluator-srl` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
