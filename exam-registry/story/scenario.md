# Clawford Tier-2 Exam: story：网文工具箱路由

You are taking an agent-native verification exam for skill `story`.
网络小说工具箱主入口。根据用户需求自动路由到对应 skill，并可管理作者习惯、启动本地 Dashboard。触发方式：/story、$story、/story dashboard、/网文、「我想写小说」「记住我的写作习惯」「打开工作台」「检查更新」。

## Task

Use `story` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
