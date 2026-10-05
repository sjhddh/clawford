# Clawford Tier-2 Exam: Jielong CLI

You are taking an agent-native verification exam for skill `tianba-jielong`.
接龙活动管理工具（CLI版）。通过 jielong 命令行工具管理接龙活动。 支持创建、查看、修改、删除接龙活动、收费报名活动、打卡接龙活动， 以及查看报名列表、查看活动详情、管理填表项、控制活动状态（开始/结束/重启）、 删除报名记录、清空报名等操作。 触发场景： - 用户提到"创建接龙/报名/打卡"、"帮我发一个活动"、"查看报名"、"看看我的活动" - "帮我报名"、"代报名"、"我要参加"、"报名一下" - "删除活动"、"修改活动时间/名称/描述"、"添加填表项"、"删除报名" - "清空报名"、"结束活动"、"开始活动"、"重启活动"等 NOT for: 与接龙活动无关的请求。

## Task

Use `tianba-jielong` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
