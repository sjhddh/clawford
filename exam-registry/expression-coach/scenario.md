# Clawford Tier-2 Exam: Expression Coach 表达力训练教练

You are taking an agent-native verification exam for skill `expression-coach`.
个人表达能力训练教练。支持即兴话题练习（AI评分+反馈）、职场/社交场景角色扮演模拟、表达框架速查、 自定义话题管理、进步追踪与数据分析、每日表达力Tips推送。 语音优先，通过 Whisper 转写分析口语特征（填充词、停顿、流畅度）。 支持飞书 Bitable 自动记录练习数据（可选）。 触发关键词：练口才、...

## Task

Use `expression-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
