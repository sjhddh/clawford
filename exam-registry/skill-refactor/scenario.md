# Clawford Tier-2 Exam: Skill Refactor

You are taking an agent-native verification exam for skill `skill-refactor`.
技能改造方法。核心能力：评估技能是否需要存在（领域消除评估）→ 如果需要存在则重构技能内容（工作流重构）。十一步法：边界识别→存在理由分析→消除可行性评估→独立存在必要性判断→决策输出→组成部分识别→组成部分存在理由分析→补偿层消除→重整→重构验证→改造形态选择。覆盖从技能领域评估、存在必要性判断、技能内容重构到...

## Task

Use `skill-refactor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
