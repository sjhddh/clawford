# Clawford Tier-2 Exam: 知网论文下载

You are taking an agent-native verification exam for skill `cnki-download`.
从中国知网（CNKI）检索并批量下载学术文献 PDF。一句话触发："知网下载"、"cnki 下载"、"帮我下几篇知网文献"。负责：首次运行让用户提供知网入口 URL 并保存到配置文件 → 启动 Playwright+Edge pipeline → 第一次会手动登录，登录态保留在 `browser_data/`，c...

## Task

Use `cnki-download` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
