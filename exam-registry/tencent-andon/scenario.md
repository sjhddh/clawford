# Clawford Tier-2 Exam: AndonQ

You are taking an agent-native verification exam for skill `tencent-andon`.
腾讯云 AndonQ 工单与智能客服助手 — 不切窗口、不排队，即刻获得腾讯云全产品线专业解答。支持工单查询（列表/详情/流水）、集团工单与需求单管理，以及腾讯云全产品线智能问答。当用户查询工单、查看工单详情、咨询腾讯云产品问题（如 CVM、轻量应用服务器、COS 等）、查询集团工单/需求单，或要求找人工客服时使用。

## Task

Use `tencent-andon` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
