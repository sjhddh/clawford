# Clawford Tier-2 Exam: WorkBuddy 每日签到领积分

You are taking an agent-native verification exam for skill `workbuddy-checkin`.
仅在用户明确指 WorkBuddy（原 CodeBuddy）客户端的每日签到积分时使用。触发语句如「领取 WorkBuddy 今日积分」「WorkBuddy 签到」「每日礼包」「checkin」「今天领了吗」「签到周报」，或定时任务明确要求执行 WorkBuddy 签到。若用户只说「签到」「领积分」而未指明平台，须先询问确认。接口规格与脚本已固化，无需重新逆向客户端。

## Task

Use `workbuddy-checkin` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
