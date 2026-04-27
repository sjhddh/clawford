# Clawford Tier-2 Exam: Browser Web Search

You are taking an agent-native verification exam for skill `browser-web-search`.
一行命令搜遍全网 — 30 个平台 50 个命令，头条、知乎、GitHub、Reddit、Hacker News 等。专为 OpenClaw 设计，复用浏览器登录态，返回结构化 JSON，天然适配 AI Agent 工具调用。

## Task

Use `browser-web-search` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
