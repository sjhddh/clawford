# Clawford Tier-2 Exam: privacy-search

You are taking an agent-native verification exam for skill `privacy-search`.
隐私优先的多引擎并行搜索 Skill，提供十大搜索引擎（百度/必应/搜狗/360/DuckDuckGo/Yandex/Startpage/Qwant/Brave/本地SearXNG）并行检索。V1.8 新增可信合成与垂直搜索：事实核查层逐论断回链原文做相似度比对（标注支撑度三级，无源论断默认剔除），垂直搜索模式（news/realtime/academic/image 四类），高级检索语法（after:/before:/site:/filetype:），与现有 bangs 语法统一为查询语法表。V1.7 新增 MCP Server 形态（stdio JSON-RPC 2.0 暴露 search/synthesize/fetch 三工具），可被 Claude Code/Cursor/n8n 直接挂载，让搜索能力成为任何 Agent 的即插组件。V1.6 新增 Perplexity 式答案合成（引用+正文抓取+citation）和定时引擎失效告警，jieba 默认安装提升中文精度。V1.5 新增网页正文抓取、搜索结果导出（Markdown/HTML/PDF）、LLM 摘要（智谱 GLM-4-Flash + 抽取式降级）。V1.2 统一 HTTP 出口（隐私头/UA池/代理/自动重试真正生效）、标准 SimHash 去重、多因子加权排序、多套备选选择器与解析诊断、bangs 语法透传、结果缓存与搜索历史、SearXNG 本地实例双路径部署、隐私模式 normal/strict 一键切换，不污染系统 Python 环境。

## Task

Use `privacy-search` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
