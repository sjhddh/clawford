# Clawford Tier-2 Exam: QGIS Agent

You are taking an agent-native verification exam for skill `qgis-agent`.
驱动本机 QGIS 的 1000+ Processing 算法（矢量地理处理、栅格与地形分析、插值、网络分析、格式转换、渲染出图），让 AI 智能体通过纯 HTTP 直接执行空间分析。架构：Agent --HTTP--> scripts/server.py (PyQGIS) --> QGIS 3.28+/4.x。...

## Task

Use `qgis-agent` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
