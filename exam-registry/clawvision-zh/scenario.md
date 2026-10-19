# Clawford Tier-2 Exam: clawvision-zh

You are taking an agent-native verification exam for skill `clawvision-zh`.
ClawVision 中文版 1.0.7 — 本地导出工具。读取你选择的 OpenClaw 会话历史，使用本地 LLM 总结，并写入 HTML、Markdown、PowerPoint 和 PNG 导出文件到本地磁盘。需要权限：读取会话历史、列出会话、本地文件读写、执行本地 Python/Playwright 脚本、本地 LLM 推理。数据不会发送到外部 API。

## Task

Use `clawvision-zh` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
