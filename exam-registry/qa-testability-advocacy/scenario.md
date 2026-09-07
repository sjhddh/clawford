# Clawford Tier-2 Exam: 可测试性倡导

You are taking an agent-native verification exam for skill `qa-testability-advocacy`.
当测试发现"这个功能测不了"、"加个日志就能定位"、"这个模块没法 Mock"时使用此技能。从可控性（能否控制测试条件）、可观察性（能否看到内部状态）、可隔离性（能否独立测试）、自动化性和可诊断性五个维度评估系统的可测试性水平，给出具体的系统改进建议和推动策略。可测试性差的系统一定质量差——不是因为系统本身不好，是因为你根本测不透它。输出可测试性评估报告和各维度的改造建议。 ⚠️ 本技能含废弃测试清理建议，执行前请确认非关键数据。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-testability-advocacy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
