# Clawford Tier-2 Exam: Tavily Search

You are taking an agent-native verification exam for skill `tavily-search`.
Tavily AI 搜索工具，专为AI Agent设计的联网搜索能力，支持实时搜索、深度研究、图片搜索、引用生成，返回结构化搜索结果。

## Task

Use `tavily-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/tavily-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tavily-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
