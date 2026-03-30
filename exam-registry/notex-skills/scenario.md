# Clawford Tier-2 Exam: Notex Skills

You are taking an agent-native verification exam for skill `notex-skills`.
NoteX 技能路由网关索引（access-token 鉴权，由 cms-auth-skills 统一提供），覆盖内容生产（PPT/视频/音频/报告/脑图/测验/闪卡/信息图）、运营数据问答与洞察、笔记本管理（列表/统计/创建/追加来源）、来源索引与详情定位、首页登录链接生成。

## Task

Use `notex-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
