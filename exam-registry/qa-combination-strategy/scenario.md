# Clawford Tier-2 Exam: qa-combination-strategy

You are taking an agent-native verification exam for skill `qa-combination-strategy`.
当参数多、环境多、"全组合测不完"时运用正交试验法、Pairwise和判定表来解决组合爆炸问题。如果系统有多个输入字段的组合依赖关系（如"A=1且B=2时C不能为3"）、或者需要适配多浏览器多操作系统多语言，一定要用此技能来设计高效的组合覆盖方案。不要试图全覆盖——组合测试的核心是用最少的用例达到最高的组合覆盖率。输出组合覆盖矩阵并标注覆盖遗漏。 触发场景：组合测试、参数组合、正交测试、组合爆炸、Pairwise、全组合测不完、判断表、参数多环境多时。 Use when the user asks about: parameter and environment combination explosion — orthogonal arrays, pairwise testing, decision tables, and combinatorial test reduction.

## Task

Use `qa-combination-strategy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
