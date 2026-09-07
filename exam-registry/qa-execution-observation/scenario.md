# Clawford Tier-2 Exam: 测试执行观察

You are taking an agent-native verification exam for skill `qa-execution-observation`.
当测试新人不知道执行时应该关注什么、或者有经验的测试发现"执行完了但好像什么都没发现"时使用此技能。测试执行不是"按步骤操作看结果"——你需要同时关注功能表现、接口响应、日志报错、UI 渲染、数据一致性、性能指标六路信号。大多数的 Bug 是被"不小心看到"的而非被测出来的。每轮执行后输出观察记录，标注异常信号和后续需要跟进的问题。 ⚠️ 本技能示例可能调用外部监控/截图工具，请在受控环境执行。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-execution-observation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
