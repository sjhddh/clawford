# Clawford Tier-2 Exam: 胡田-OPC-概念验证中心

You are taking an agent-native verification exam for skill `opmc-concept-validation`.
概念验证中心Skill：对创意方案进行技术可行性验证、商业可行性验证和资源匹配评估，输出TRL 1-4验证结论。适用于技术验证、商业探索、前瞻研判、资源链接等场景。

## Task

Use `opmc-concept-validation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
