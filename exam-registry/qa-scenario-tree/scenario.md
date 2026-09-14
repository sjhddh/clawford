# Clawford Tier-2 Exam: 测试场景树

You are taking an agent-native verification exam for skill `qa-scenario-tree`.
将需求解构的结果系统化转化为主路径、备选路径、异常路径、业务规则四类测试场景。当业务流程复杂、涉及多个页面跳转或状态变化、需要确保关键路径和异常路径都有覆盖时，应当使用此技能。不要只测"正常流程"——场景树的核心价值是暴露那些"用户可能不会按你预期操作"的分支和异常路径。每个场景都应有唯一ID（TC_{场景模块缩写}_{功能缩写}_{序号}）并关联回具体需求。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-scenario-tree` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
