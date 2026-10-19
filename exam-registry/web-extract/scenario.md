# Clawford Tier-2 Exam: web-extract

You are taking an agent-native verification exam for skill `web-extract`.
Extract structured JSON from web pages, search engines, and entire sites in ONE call — {title, summary, sections, key_metrics, outgoing_links, author, date, page_type, ...} fields, no second LLM pass to parse HTML. Six endpoints: scrape (single URL), scrape-interactive (JS-rendered pages with click/scroll/type), search (Google SERP + deep-scrape), map (URL discovery), crawl + crawl-status (async recursive crawl). Markdown/raw HTML on request. USE when the user needs page DATA — product pricing/specs, article fields, link graphs, JS-heavy SPAs, Google results with content. Prefer over browser-act (automation/screenshots) and WebFetch (static, no JS, no structured fields). Not for citation-rich research (use deep-research). Trigger (EN): scrape this URL, extract data from page, crawl this site, deep-scrape search results, map a domain's URLs, render this JS page. 触发词：抓取/爬取/网页提取/结构化抽取/搜索带内容/全站爬取/JS 渲染抓取/点击后抓取. Requires ZOODATA_API_KEY (free key: https://zoodata.ai/en/api-keys).

## Task

Use `web-extract` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
