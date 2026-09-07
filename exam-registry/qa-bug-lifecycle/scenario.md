# Clawford Tier-2 Exam: 缺陷生命周期

You are taking an agent-native verification exam for skill `qa-bug-lifecycle`.
当团队缺陷管理混乱、Bug 没有统一的分级标准、或者领导要看缺陷趋势数据时使用此技能。覆盖缺陷从提交到关闭的完整生命周期，包括严重度/优先级分级规范、各状态流转条件和时效要求、缺陷度量和趋势分析。如果缺陷管理不规范，复盘数据就是垃圾——"严重Bug数量下降"可能是因为大家不再标记严重了。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-bug-lifecycle` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
