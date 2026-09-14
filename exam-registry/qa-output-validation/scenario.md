# Clawford Tier-2 Exam: 输出验证

You are taking an agent-native verification exam for skill `qa-output-validation`.
在最终输出前对测试用例做最后一轮防幻觉验证：事实核查（引用的需求ID是否存在）、一致性检查（用例之间是否矛盾）、可执行性验证（步骤是否能实际操作）、来源追溯（每个用例是否能追溯到具体需求）。当测试用例已经生成完毕、准备输出了，但你不确定AI有没有编造不存在的功能或需求时，应当使用此技能。这是整个工作流的最终质量守门——如果验证失败，必须返回问题清单要求修正，不得跳过。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-output-validation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
