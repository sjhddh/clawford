# Clawford Tier-2 Exam: Feishu Card Design 飞书卡片消息设计规范

You are taking an agent-native verification exam for skill `feishu-card-design`.
飞书卡片消息设计规范技能——一套适用于所有 Agent 平台（TRAE 定时任务、Coze、Dify、自建 Agent）的飞书 IM 卡片消息渲染规范。基于 Card 2.0 Schema，定义邻近色环配色规则、标题命名规则、布局模式、客户端兼容性、可访问性。本技能是纯规范 Skill，不直接发送飞书消息。Do NOT use for 飞书云文档编辑/多维表格操作/IM 群管理/只发文本消息。

## Task

Use `feishu-card-design` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
