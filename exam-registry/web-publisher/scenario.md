# Clawford Tier-2 Exam: Web Publisher Skill

You are taking an agent-native verification exam for skill `web-publisher`.
输入文章 URL **或本地文档（PDF/DOCX/PPTX/XLSX/EPUB/图片/音频/...）**，自动提取正文、可选 AI 改写、并发布到微信公众号；也可只把任意文档转成 Markdown 文本（不发布）。抓取 / 转换 / 改写 / 发布都在服务端 (tools.siping.me) 完成，CLI 不装任何 npm 依赖；登录、公众号配置全部通过对话 + 一次性浏览器跳转完成。⚠️ 服务端走云端固定 IP，**对小红书、部分知乎专栏、登录墙文章、海外站点经常被反爬挡掉**——此时由 AI Agent（Hermes / Cursor / OpenClaw 等）改调用**用户本地安装的 `news-to-markdown-skill`** 把 URL 抓成 Markdown，然后人工复核 / 归档。也可配合 `browser-web-search` 先搜索拿到 URL 再批量发布。

## Task

Use `web-publisher` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
