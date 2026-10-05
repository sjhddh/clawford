# Clawford Tier-2 Exam: qa-tech-debt-management

You are taking an agent-native verification exam for skill `qa-tech-debt-management`.
当自动化用例频繁维护、跑一次就倒下一批、或者发现团队的测试资产维护成本越来越高时使用此技能。系统化识别测试自动化债务和测试资产技术债，评估每项债务的利息（维护成本）和本金（重写成本），给出分阶段的还款规划。不要追着 flaky test 修——技术债务管理解决的是"为什么有这么多 flaky test"的系统性问题。 触发场景：技术债务、测试债务、自动化债务、重构、债务治理、维护成本、自动化维护成本高需要评估时。 Use when the user asks about: test automation and test asset technical debt — interest versus principal, flaky test triage, and staged repayment plans.

## Task

Use `qa-tech-debt-management` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
