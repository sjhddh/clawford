# Clawford Tier-2 Exam: 小红书发布前检测 · 笔记合规自查 · 标题·导流·AI声明

You are taking an agent-native verification exam for skill `xiaohongshu-preflight-check`.
小红书发布前文本合规自查（4 组）。把「发一篇笔记之前要人工过的那些关」变成一条命令 + 一个退出码：违禁词·敏感词·限流词检测（复用离线词库）、标题与篇幅规范、AI 声明与强制标注、导流风险。纯本地、零依赖、不调用付费 API，退出码 0/1/2/3 可直接卡住发布流程。

## Task

Use `xiaohongshu-preflight-check` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
