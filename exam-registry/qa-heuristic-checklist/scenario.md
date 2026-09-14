# Clawford Tier-2 Exam: 测试启发式清单

You are taking an agent-native verification exam for skill `qa-heuristic-checklist`.
提供登录、支付、搜索、购物车、导入导出、审批、消息通知、权限管理等不同类型功能的测试要点模板。当面对一个新功能类型不知道从哪里开始测试、或者担心遗漏了某个功能类型的特有测试点时，应当使用此技能。特别适合测试新人——照着清单逐项检查就不会漏掉该功能类型的典型问题。例如支付类要测金额精度和幂等性，导入导出类要测格式兼容和性能，每个功能类型都有其特有的高风险区域。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-heuristic-checklist` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
