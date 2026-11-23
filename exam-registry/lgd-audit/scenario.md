# Clawford Tier-2 Exam: lgd-audit

You are taking an agent-native verification exam for skill `lgd-audit`.
lgd-audit — LGD 审计中枢（meta 薄分发器）。把 GovernanceOS 的 AUDIT 阶段 10 个审计节点聚合成可检索、可一键探测的入口：徽章签发/验真、三律审计、行为追溯、偏见审计、环境密钥审计、治理审计链、审计留痕、专家包合规审计、可追溯性审计团。另含 LGD三律审计器（lgd-audit.py）口径说明。只按 slug 路由到独立子技能，不搬运、不重实现任何子技能代码。 适用场景：当需要AI 智能体审计/合规/可追溯/三律核验能力时使用本技能；触发词：lgd-audit、审计、三律、可追溯、合规审计。

## Task

Use `lgd-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
