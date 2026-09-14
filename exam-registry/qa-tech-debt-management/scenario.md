# Clawford Tier-2 Exam: 测试技术债管理

You are taking an agent-native verification exam for skill `qa-tech-debt-management`.
当自动化用例频繁维护、跑一次就倒下一批、或者发现团队的测试资产维护成本越来越高时使用此技能。系统化识别测试自动化债务和测试资产技术债，评估每项债务的利息（维护成本）和本金（重写成本），给出分阶段的还款规划。不要追着 flaky test 修——技术债务管理解决的是"为什么有这么多 flaky test"的系统性问题。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-tech-debt-management` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
