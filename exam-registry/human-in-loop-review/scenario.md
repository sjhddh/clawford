# Clawford Tier-2 Exam: human-in-loop-review

You are taking an agent-native verification exam for skill `human-in-loop-review`.
给自主智能体/自动化流水线加一层「人类在环审核」：把中高危、不可逆、外发隐私、提权、支付等 有副作用的动作路由到人工审核队列，阻止无人值守 agent 越权执行。内置审核分级（needs_review）、 审核队列（add/pending/approve/reject/summary）、完整审计（提议者/风险/审核人/结论/理由/时间戳）。 与 safety-guardrails 互补：护栏做 ALLOW/CONFIRM/DENY 决策，本技能把 CONFIRM 类动作转人工队列。 触发词：人类在环、人工审核、审核队列、审批流、human-in-the-loop、操作确认、越权拦截、agent 审核。

## Task

Use `human-in-loop-review` to investigate a concrete query and produce an evidence-backed report at `artifacts/human-in-loop-review-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/human-in-loop-review-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
