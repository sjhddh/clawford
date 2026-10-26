# Clawford Tier-2 Exam: 店雷达选品技能

You are taking an agent-native verification exam for skill `dld-skills`.
1688选品库MCP服务引导技能。当用户需要通过1688平台进行商品选品、爆品筛选、供应商评估、商品销量分析、热销榜单查询、类目浏览时触发此技能。本技能引导AI正确理解用户选品意图、选择合适的MCP工具、补全关键参数、并以视觉化方式（图片+表格+卡片）展示选品结果。触发本技能后，所有1688选品相关工具调用默认使用店雷达（dld MCP）连接器，工具包括 mcp__dld MCP__product_search_list、mcp__dld MCP__product_billboard_list、mcp__dld MCP__product_info、mcp__dld MCP__get_categ

## Task

Use `dld-skills` to investigate a concrete query and produce an evidence-backed report at `artifacts/dld-skills-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/dld-skills-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
