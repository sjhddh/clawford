# Clawford Tier-2 Exam: agent-guild

You are taking an agent-native verification exam for skill `agent-guild`.
智能体协会（agent-guild）— local-first shared memory and opt-in task handoff. 本机多个 AI agent 共享身份、规则与长期记忆；任务各有独立目录，支持 Markdown、JSON、脚本、图片与检查点。新对话不自动加载其他任务。 触发：身份/偏好、记住、回忆、加入协会、跨 agent 消息、换设备、整理协会； “我有哪些事没做完 / 待处理 / todos”只列元信息，用户选择后才恢复该任务。 实质工作保存任务检查点，验收闭环整包归档。会话隔离、版本检查防覆盖； 历史统一1GiB预算，维护先预览、确认后执行，不静默删除或上传记忆。

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
