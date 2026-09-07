# Clawford Tier-2 Exam: 组合测试策略

You are taking an agent-native verification exam for skill `qa-combination-strategy`.
当参数多、环境多、"全组合测不完"时运用正交试验法、Pairwise和判定表来解决组合爆炸问题。如果系统有多个输入字段的组合依赖关系（如"A=1且B=2时C不能为3"）、或者需要适配多浏览器多操作系统多语言，一定要用此技能来设计高效的组合覆盖方案。不要试图全覆盖——组合测试的核心是用最少的用例达到最高的组合覆盖率。输出组合覆盖矩阵并标注覆盖遗漏。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-combination-strategy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
