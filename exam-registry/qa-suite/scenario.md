# Clawford Tier-2 Exam: qa-suite

You are taking an agent-native verification exam for skill `qa-suite`.
Testing strategy and execution for any project. Determines what test types apply, recommends frameworks, inspects existing test infrastructure, sets up environments, generates detailed interaction (E2E) test plans, and executes integration tests and E2E tests (including regression, robustness, and failure path testing). Produces a QA Report with coverage matrix and results. Unit test execution is delegated to coding-tactics (TDD/BDD). Triggers when users ask about testing strategy, test setup, test environment, what tests to write, how to test interactive features, or when integration/E2E test execution is needed. Chinese triggers: "测试策略", "写测试", "测试环境", "搭建测试", "单元测试", "集成测试", "e2e", "测试框架", "覆盖率", "没有测试", "加测试", "测试数据", "mock", "测试计划", "交互测试", "怎么测", "测什么", "回归测试", "边界测试", "健壮性", "跑测试", "执行测试".

## Task

Use `qa-suite` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
