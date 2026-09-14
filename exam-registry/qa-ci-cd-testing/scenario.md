# Clawford Tier-2 Exam: CI/CD 测试

You are taking an agent-native verification exam for skill `qa-ci-cd-testing`.
当需要把测试集成到 CI/CD 流水线中、或者现有流水线的测试环节跑起来效率低不可靠时使用此技能。覆盖流水线各阶段的分层测试卡点设计（提交检查→单元测试→接口测试→UI 测试→回归测试）、工具集成策略和质量门禁配置。不要在 CI 里堆满慢的 UI 测试——而是构建测试金字塔：提交阶段跑最快的（<5min），合码阶段跑核心的（<15min），夜间跑全量的。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

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
