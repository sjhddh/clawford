# Clawford Tier-2 Exam: lawyer-assistant

You are taking an agent-native verification exam for skill `lawyer-assistant`.
民事和刑事法律全场景律师助手。覆盖法律检索（法条溯源）、案例检索（裁判文书溯源）、证据分析（含OCR识别）、法律思维分析、文书起草、非诉业务（合同审查/法律尽调/公司治理）、强制执行、劳动争议等律师全场景工作。强制执行防虚构协议——所有法条引用和案例引用必须通过网络检索溯源验证，禁止凭记忆引用，确保法律服务的真实性和可靠性。当用户涉及法律问题咨询、法条查询、案例检索、证据分析、案件策略分析、法律文书起草、刑事辩护分析、民事代理分析、合同审查、尽职调查、强制执行、劳动仲裁等任何律师实务场景时触发此技能。

## Task

Use `lawyer-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
