# Clawford Tier-2 Exam: 晓蜜智能外呼

You are taking an agent-native verification exam for skill `intelligent-outbound-call`.
该技能调用阿里云晓蜜外呼机器人，向指定手机号码列表发起自动语音外呼，支持自定义话术场景，可批量处理数十至数千个号码，并实时追踪外呼任务进度。 当用户问题涉及「批量给客户打电话通知某件事」「自动外呼做满意度调查或回访」「用机器人拨打面试邀约或活动提醒」「从前置节点（如 CRM、简历筛查）获取号码后直接外呼」时使用该技能。

## Task

Use `intelligent-outbound-call` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
