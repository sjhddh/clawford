# Clawford Tier-2 Exam: ontology-identity-gate

You are taking an agent-native verification exam for skill `ontology-identity-gate`.
为 Agent 运营本体（Proposal Gate）提供 run-scoped 身份令牌（HMAC-SHA256，零第三方依赖）+ 两阶段提交治理：agent 只到 validated，commit 仅由 human 令牌触发；含指纹审计、scope 授权与 fail-closed 渐进启用。v1.1 增补对象级权限（mandatory Markings 行级 Visibility + clearance，单一 PolicyEvaluator 全入口 enforce）。触发：运营动作身份治理、agent-as-tool 消费编排、提案门禁 fail-open 收敛、决策指纹审计、对象/行级 ABAC 访问控制、PII/区域隔离。

## Task

Use `ontology-identity-gate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
