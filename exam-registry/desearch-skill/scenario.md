# Clawford Tier-2 Exam: desearch-skill

You are taking an agent-native verification exam for skill `desearch-skill`.
调用Zeelin Deep Research API进行深度研究任务。完全异步处理：提交任务后立即返回，后台进程自动确认大纲并定时检查任务状态，任务完成后自动保存md文件。自动配置定时通知（每2分钟检查），任务完成后主动通知用户。使用前必须先询问用户思考模式和搜索范围。

## Task

Use `desearch-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
