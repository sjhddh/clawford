# Clawford Tier-2 Exam: patent-panorama-insights

You are taking an agent-native verification exam for skill `patent-panorama-insights`.
当用户需要基于 PatSnap 或智慧芽专利 MCP/API 数据开展专利全景、专利版图、竞争专利情报、技术路线图、组合规划、产品/R&D 策略项目时使用本技能——无论用户显式调用 /patent-panorama-insights（或 @patent-panorama-insights），还是用自然语言描述这类专利分析任务。本技能编排五层流水线：环节1检索与降噪（patent-panorama-insights-search）、环节2全景统计与价值挖掘（patent-panorama-insights-stats）、环节3标引体系推荐（patent-panorama-insights-tag）、客户 SaaS 工具中的人工标引交接，以及环节4有证据支撑的单文件 HTML 报告（patent-panorama-insights-report），并管理各层之间的检查点、人工标引交接、回滚和进度汇报。

## Task

Use `patent-panorama-insights` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
