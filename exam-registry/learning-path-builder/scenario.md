# Clawford Tier-2 Exam: 职业技能个性学习路径生成

You are taking an agent-native verification exam for skill `learning-path-builder`.
根据输入的职业技能标准文档，输出基于知识图谱的三层学习路径规划。适用于职业技能学习、职业资格认证学习。本技能以中国国内职业技能为目标，参考资源为国内官方资源。详细说明见 references/README.md

## Task

Use `learning-path-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
