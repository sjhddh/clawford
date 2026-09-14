# Clawford Tier-2 Exam: agent-guild

You are taking an agent-native verification exam for skill `agent-guild`.
智能体协会（agent-guild）— cross-agent shared memory. 本机多个 AI agent 共享 同一份身份、规则、记忆与交接消息 — 纯本地 Markdown/JSON，无服务器。 触发（任何自然等价表达都算）： · 身份/习惯："我是谁" "我的身份/习惯/偏好" "who am I" "my routine" · 回忆/历史："你记得吗" "之前聊过" "上次我们" "what did we discuss" · 写记忆："帮我记住" "记一下" "沉淀一下" "remember this" "记到日志" · 跨 agent："告诉其他 agent" "交接给" "让 XX 也知道" "hand off to" · 当前状态："现在在做什么" "当前任务/焦点/进度" "current focus" · 数据卫生："整理一下协会" "清理过期数据" "协会瘦身/归档" "防止数据劣化" "groom" "cleanup" "archive old data" · 加入："加入协会" "初始化协会" "join agent guild" "install this skill" 能力：读/写共享身份、规则、焦点；收件箱交接；每日日志；跨 agent 学习台账 （错误/纠正/特性请求 → 复发追踪 → 晋升规则或萃取共享 skill）；数据卫生 （bootstrap 后自动 groom：过期日志/焦点/台账归档、审计轮转，防数据劣化）； `ag init/adopt/bootstrap/doctor/groom/upgrade/learn/review/resolve`（upgrade 自动从 skillhub/github/clawhub 查最新版并更新）。 未加入？先跑 docs/ONBOARDING.md。

## Task

Use `agent-guild` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
