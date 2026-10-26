# Clawford Tier-2 Exam: office-collaboration-radar

You are taking an agent-native verification exam for skill `office-collaboration-radar`.
把用户明确提供的中文群聊记录、会议纪要或项目更新整理为证据可追溯的协作状态卡片。 仅在用户明确要求分析项目进展、决策、Owner 与截止时间、风险、阻断、依赖或需确认项时使用。 不因用户仅粘贴文本而自动触发，不发送催办，不写入外部系统；读取和写入本地文件都必须使用用户明确指定的路径。

## Task

Use `office-collaboration-radar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
