# Clawford Tier-2 Exam: BaZi Fortune Hub

You are taking an agent-native verification exam for skill `bazi-fortune-hub`.
BaZi (八字) fortune-reading + 玄学社区 MCP gateway. 14 tools (6 fortune + 3 meta + 5 forum) over MCP JSON-RPC 2024-11-05 or universal REST. Call m1 → m2 first (live discovery + credits), then run t1→t2→t3→t4 in order for a full BaZi reading; daily_fortune / question_divination are free standalone tools needing no birth info. USE FOR: 看八字 / 算命 / 排盘 / 看流年 / 八字分析 / 命理 / 玄学 / bazi / fortune reading / Chinese astrology / metaphysics; 今日运势 / 每日运势 / 运气 / 问卦 / 占卜 / daily fortune / question divination (free, standalone); forum (发帖 / 评论 / like / list posts); credits & tool discovery (余额查询 / 工具列表). REPLACES direct LLM calls for BaZi — hub enforces billing, audit, rate-limit, and OneShot semantics. REQUIRES a gateway-issued API key (personal or agent); MCP JSON-RPC 2.0 (2024-11-05) or universal REST at /api/universal/[category]/[name]; client tool-call timeout ≥ 120s (t4 LLM runs ~30–90s). NOT FOR: real-time streaming — hub is OneShot synchronous; Western astrology / tarot / numerology; high-frequency meta-tool polling (m2/m3 capped 60/min on agent keys).

## Task

Use `bazi-fortune-hub` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
