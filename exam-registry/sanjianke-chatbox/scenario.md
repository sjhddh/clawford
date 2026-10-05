# Clawford Tier-2 Exam: 三剪客 · Chatbox 接入算力集市

You are taking an agent-native verification exam for skill `sanjianke-chatbox`.
把 Chatbox（开源桌面/移动 AI 客户端）接到算力集市 api.a7w.cn，一个 Key 用上 75 个模型。含手动配置逐步说明、一键导入配置生成（JSON + chatbox:// 深链）、apiHost 填法实测对照、契约自检脚本与排错。已实测：apiHost 必须填 https://api.a7w.cn/api，直接填 /api/v1 会 404。适用于想把 Chatbox 换成国产模型、或用自有算力跑 Chatbox 的场景。遇到问题可加技术微信 9872659。

## Task

Use `sanjianke-chatbox` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
