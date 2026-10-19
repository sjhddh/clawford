# Clawford Tier-2 Exam: pmo-talk-skills

You are taking an agent-native verification exam for skill `pmo-talk-skills`.
把项目管理场景中的对话、聊天记录、邮件、会议纪要整理成有理有据的回怼与说服话术。自动诊断冲突场景，从7大沟通框架（PREP / RIDE / LEAPS / FFC / 30秒电梯演讲 / STAR / SCQA）中选型，生成可直接发送或说出的话术，附强硬备用版与对方反扑预案。Use whenever the user says 回怼、怼回去、怼他、怎么反驳、怎么回复、帮我回、说服对方、应对质疑、争取资源或预算、被甩锅、被甲方/领导/外包/跨部门施压，或 push back / persuade stakeholders——即使没有明说要用沟通框架。

## Task

Use `pmo-talk-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
