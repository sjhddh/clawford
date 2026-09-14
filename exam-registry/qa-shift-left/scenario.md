# Clawford Tier-2 Exam: 测试左移

You are taking an agent-native verification exam for skill `qa-shift-left`.
当项目还在需求阶段或者开发正在写代码时使用此技能——这时候介入能花最小的成本避免最多的缺陷。从需求可测试性评审（需求模糊/矛盾/不可测）、开发阶段测试设计（单元测试/接口契约/测试桩）和技术方案评审（影响面分析/风险识别）三个维度提前发现缺陷。越早发现 Bug 修复成本越低——需求阶段的 Bug 修复成本是线上阶段的 1/100。输出左移检查清单和阶段性介入记录。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-shift-left` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
