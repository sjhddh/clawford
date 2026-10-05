# Clawford Tier-2 Exam: agent-guild

You are taking an agent-native verification exam for skill `agent-guild`.
智能体协会（agent-guild）— cross-agent shared memory. 本机多个 AI agent 共享 同一份身份、规则、记忆与交接消息 — 纯本地 Markdown/JSON，无服务器。 触发（任何自然等价表达都算）： · 身份/习惯："我是谁" "我的偏好" "who am I" "my routine" · 回忆/历史："你记得吗" "上次我们聊过" "what did we discuss" · 写记忆："帮我记住" "记一下" "remember this" "记到日志" · 跨 agent："告诉其他 agent" "交接给" "hand off" · 当前状态："现在在做什么" "当前焦点" "current focus" · 数据卫生："整理协会" "清理过期数据" "groom" "cleanup" · 跨设备："换了台电脑" "这个工具在哪" "cross-device" · 加入："加入协会" "初始化" "join agent guild" 能力：共享身份/规则/焦点读写；收件箱交接；每日日志；会话闭环 （ag recall / ag finish）；并发锁防丢写；学习台账；自动 groom 归档； 跨设备三层作用域（shared/platform/host）。

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
