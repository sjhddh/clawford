# Clawford Tier-2 Exam: qa-execution-observation

You are taking an agent-native verification exam for skill `qa-execution-observation`.
当测试新人不知道执行时应该关注什么、或者有经验的测试发现"执行完了但好像什么都没发现"时使用此技能。测试执行不是"按步骤操作看结果"——你需要同时关注功能表现、接口响应、日志报错、UI 渲染、数据一致性、性能指标六路信号。大多数的 Bug 是被"不小心看到"的而非被测出来的。每轮执行后输出观察记录，在 9 列设计用例上回填「实际结果」与「结论」完成执行闭环，标注异常信号与待跟进问题。⚠️ 本技能示例可能调用外部监控/截图工具，请在受控环境执行。 触发场景：执行观察、观察日志、测试执行、多轮观察、执行异常、观察报告、需要分析执行过程异常时。 Use when the user asks about: observing test execution across six signal channels — functional behavior, API responses, logs, UI rendering, data consistency, and performance.

## Task

Use `qa-execution-observation` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
