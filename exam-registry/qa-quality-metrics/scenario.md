# Clawford Tier-2 Exam: 测试质量度量

You are taking an agent-native verification exam for skill `qa-quality-metrics`.
当管理层问"质量到底怎么样"、需要量化质量数据来做决策、或者想建立质量看板来跟踪趋势时使用此技能。从过程质量（需求评审通过率/用例覆盖度）、结果质量（Bug 密度/线上事故数）、效率（测试周期/回归耗时）和健康度（自动化通过率/环境稳定性）四个维度设计度量指标。⚠️ 度量的目的不是打分，是发现问题趋势——如果只报喜不报忧，度量就没用了。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-quality-metrics` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
