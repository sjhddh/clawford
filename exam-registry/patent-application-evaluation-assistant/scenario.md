# Clawford Tier-2 Exam: patent-application-evaluation-assistant

You are taking an agent-native verification exam for skill `patent-application-evaluation-assistant`.
面向企业 IPR、专利工程师、专利代理人的专利申请预评估智能体。当用户需要评估专利申请可行性、分析技术交底书、进行专利预评估或查新检索时触发。基于技术交底书或研发资料，自动完成材料完整性检查、专利及非专利文献查新、中美欧授权可行性分析，输出 A/B/C 评级、评分依据、主要风险和处理建议。

## Task

Use `patent-application-evaluation-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
