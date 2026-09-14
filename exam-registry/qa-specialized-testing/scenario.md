# Clawford Tier-2 Exam: 专项测试

You are taking an agent-native verification exam for skill `qa-specialized-testing`.
当功能测试做完之后需要做进一步的质量验证时使用此技能。覆盖性能测试（负载/压力/稳定性）、安全测试（OWASP Top 10 TOP 漏洞）、兼容性测试（多浏览器/多设备）的测试方法。不要在功能测试还没做完时就做专项——先保证功能正确，再评估性能和安全。专项测试的产出是一组可复用的测试方案（性能指标基线、安全渗透用例、兼容性矩阵）。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-specialized-testing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
