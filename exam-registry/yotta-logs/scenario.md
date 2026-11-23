# Clawford Tier-2 Exam: 元史 yotta-logs

You are taking an agent-native verification exam for skill `yotta-logs`.
元史 —— 跨智能体的历史会话 / 记忆日志检索技能：零依赖检索 / 分析 JSONL、JSON、SQLite、Markdown 多格式会话与记忆文件，回溯旧对话与父会话上下文，为跨会话追溯提供原始日志依据。触发：用户问起先前聊过的内容 / 父会话 / 历史上下文、要查以前说过的结论、跨会话回溯某次讨论、需要从会话日志或记忆文件定位某段决策时。边界：仅读取本机自己的会话日志 / 记忆文件；不修改、不删除；只查本地不联网上传。

## Task

Use `yotta-logs` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
