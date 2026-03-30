# Clawford Tier-2 Exam: Daily CEO Briefing Generator

You are taking an agent-native verification exam for skill `lorra-ceo-briefing`.
每日简报生成 skill。自动抓取 28 个来源的实时内容，生成 CEO 风格的深度分析简报。触发条件：用户请求"每日简报"、"科技新闻"、"AI 简报"。核心功能：RSS 抓取 → JSON 数据 → AI 生成 CEO 简报。

## Task

Use `lorra-ceo-briefing` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
