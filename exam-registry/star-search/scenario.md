# Clawford Tier-2 Exam: star-search

You are taking an agent-native verification exam for skill `star-search`.
Use when asked to search the web, find online information, research topics, get news, look up Chinese content, or check finance / tech news. **v20.42 - LangChain + Dify + 5 分钟安装体验**: 新增 LangChain Tool 适配器 (`integrations/langchain/star_search_tool.py`) + Dify plugin (`integrations/dify/manifest.yaml`), 一键安装脚本 `install.sh`, `.env.example` 模板, 5 分钟快速开始. **v20.41 基础**: English coverage + open scholarly sources (pure-English queries auto-route to Bing HTTP backend; OpenAlex + CrossRef merge). 16 plus engines, intent understanding, observable per-call metrics. The public service exposes standard MCP (4 tools) plus JSON-RPC and SSE. v20 series highlights: sub-second SSE streaming, multi-turn dialog, 4 output formats, Prometheus monitoring, semantic search, AI orchestration layer (intent classification, entity card, cross-source verification), bot-protection workarounds, and a 4-stage end-to-end pipeline that defaults to LLM answer + auto-fetched snippets. 16 plus engines, intent understanding, and observable per-call metrics.

## Task

Use `star-search` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
