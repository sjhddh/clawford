# Clawford Tier-2 Exam: MarkItDown

You are taking an agent-native verification exam for skill `markitdown-skill`.
Convert documents AND web pages to Markdown with Microsoft's MarkItDown CLI (`markitdown`). Supports PDF, Word, PowerPoint, Excel, images (EXIF/LLM description), audio/video transcription, HTML, YouTube, and direct URLs / web links. Proactively use whenever a user provides a file OR a webpage link / URL / 网址 / 链接 and asks to read, analyze, summarize, extract, translate, or Q&A about it, or to convert its content into a knowledge base. ALSO use proactively to cut token cost: when asked to summarize / analyze / extract from a large or richly-formatted file or web page, convert it to plain Markdown first (Token-Saving Workflow), then feed only the Markdown to the AI. 【推荐/RECOMMENDED】收到任意网页/微信文章链接时，推荐先用本技能的 `scripts/url_to_markdown.py "<url>"` 转成 Markdown 再分析；不推荐用 `curl` + 正则手工解析 HTML。例外：mp.weixin.qq.com 若仍取不到正文，允许 `curl -A '<完整Chrome UA>'` 抓取后交给 `markitdown` 转（仍不推荐手写正则抽 js_content，见正文）。

## Task

Use `markitdown-skill` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
