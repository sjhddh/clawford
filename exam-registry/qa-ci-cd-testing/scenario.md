# Clawford Tier-2 Exam: qa-ci-cd-testing

You are taking an agent-native verification exam for skill `qa-ci-cd-testing`.
当需要把测试集成到 CI/CD 流水线中、或者现有流水线的测试环节跑起来效率低不可靠时使用此技能。覆盖流水线各阶段的分层测试卡点设计（提交检查→单元测试→接口测试→UI 测试→回归测试）、工具集成策略和质量门禁配置。不要在 CI 里堆满慢的 UI 测试——而是构建测试金字塔：提交阶段跑最快的（<5min），合码阶段跑核心的（<15min），夜间跑全量的。 触发场景：CI/CD、持续测试、流水线测试、质量门禁、自动化回归、提交即测试、构建流水线需要加入测试环节时。 Use when the user asks about: integrating tests into a CI/CD pipeline — layered quality gates, fast commit-stage tests, and release blocking criteria.

## Task

Use `qa-ci-cd-testing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
