# Clawford Tier-2 Exam: safety-guardrails

You are taking an agent-native verification exam for skill `safety-guardrails`.
给自主智能体/自动化流水线装上一道「预执行安全护栏」：对任何待执行动作做风险分级 （low/medium/high/critical）并给出 ALLOW / CONFIRM / DENY 决策。内置破坏性强、不可逆、 越权、外发隐私的 deny 规则与高影响 confirm 规则，强制拦截 rm -rf、强推、下载即执行、 删表、关机等高危动作，并要求用户显式确认中高危操作。适配自动化每小时触发的无人值守场景， 防止自主 agent 在没有护栏时造成不可逆损害。触发词：安全护栏、危险动作拦截、操作确认、 safety guardrails、agent 安全、预执行校验、destructive 拦截。

## Task

Use `safety-guardrails` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
