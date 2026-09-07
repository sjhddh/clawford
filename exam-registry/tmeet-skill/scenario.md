# Clawford Tier-2 Exam: Tmeet Skill

You are taking an agent-native verification exam for skill `tmeet-skill`.
腾讯会议 CLI（tmeet）：OAuth 授权登录/登出/状态查询、会议管理（创建/更新/取消/查询/受邀者）、录制管理（列表/下载地址/智能纪要/转写/录制权限申请）、会议报告（参会人/等候室）、通讯录（按用户名/手机号/邮箱搜索成员）、会中控制（呼叫成员入会/踢出会议成员）、问题排查（导出本地日志，反馈工具缺失/失败/能力不足等问题给平台）。当用户需要通过命令行操作腾讯会议，或 Agent 在使用过程中遇到工具缺失、调用失败、能力不足等情况想反馈给平台时使用本技能。

## Task

Use `tmeet-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
