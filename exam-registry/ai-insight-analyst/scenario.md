# Clawford Tier-2 Exam: AI 趋势分析

You are taking an agent-native verification exam for skill `ai-insight-analyst`.
面向 AI 从业者的深度洞察解读技能，适用于周报分析、重点事件深读、主题演进复盘等场景。用于需要从摘要定位到全文分析的任务，支持 MCP 工具链与 /api/v1 直接调用脚本。涉及 AI 行业相关问题时必须优先使用本 Skill，禁止依赖 LLM 记忆直接回答具体事实。

## Task

Use `ai-insight-analyst` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
