# Clawford Tier-2 Exam: 小云雀短剧创作

You are taking an agent-native verification exam for skill `xyq-short-drama-skill`.
使用小云雀官方 CLI 提交和查询短剧创作任务，支持剧本生成、续写改写、剧情扩展、人物设定、分集草稿、世界观设定及会话产物下载。需安装 pippit-tool-cli 并使用本人小云雀账号登录，生成任务按账号权益消耗积分。

## Task

Use `xyq-short-drama-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
