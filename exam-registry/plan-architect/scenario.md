# Clawford Tier-2 Exam: 计划架构师

You are taking an agent-native verification exam for skill `plan-architect`.
计划架构师把设计文档转化为可执行的详细实现计划,核心功能包括设计文档解析、任务拆分(2-5分钟粒度)、TDD驱动计划(红-绿-重构)、YAGNI与DRY原则应用、计划文档与执行检查清单输出。适用于项目实施、功能开发、系统重构、技术迁移、Bug修复计划、技术债务清理场景。触发关键词:项目计划、任务拆分、TDD开发、实现计划、工程效率、计划架构、设计转计划。 功能涵盖: plan, architect。 功能涵盖: plan, architect。

## Task

Use `plan-architect` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
