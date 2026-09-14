# Clawford Tier-2 Exam: LPA审核技能

You are taking an agent-native verification exam for skill `skill-lpa-audit`.
提供LPA分层审核全流程支持，包括知识库查询、标准清单生成、结果录入分析、报告汇总生成；当需要进行分层审核培训、执行审核任务、分析审核数据或制作审核报告时使用

## Task

Use `skill-lpa-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
