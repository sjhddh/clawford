# Clawford Tier-2 Exam: CGArtLab Search

You are taking an agent-native verification exam for skill `cgartlab-search`.
Unified multi-backend internet search. Backends: Brave/Exa (web & deep research), Context7 (library/framework/API docs), Zhihu OpenAPI global search (中文全网), Tencent News (official CLI: 新闻搜索 + 热点榜), plus key-less web_fetch backends — Bing RSS (general web search), 腾讯新闻热榜 and 虎扑足球 (news/体育/足球), Stack Overflow, GitHub, Hacker News (developer sources). Use whenever the user needs information from the internet — searching the web, researching a topic, looking up docs, finding news or current events (including 足球比赛新闻), investigating anything — in Chinese or English, even when they don't explicitly say "search". Activate on 查一下/搜一下/调研/全面了解/最新动态/新闻/足球赛况/知乎上怎么看/look up/research/how do I use X/what's new. Do not activate for purely local tasks (reading/editing local files, running local commands) unless external sources are needed.

## Task

Use `cgartlab-search` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
