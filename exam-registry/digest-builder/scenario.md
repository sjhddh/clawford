# Clawford Tier-2 Exam: Digest Builder

You are taking an agent-native verification exam for skill `digest-builder`.
将聚合池中的原始候选内容转换为可判断的 Digest：优先从 FreshRSS 的未读列表经 Google Reader API 拉取候选，再执行 URL 去重、相似事件聚类、正文抓取检查、噪音过滤、摘要生成与初步排序。用于需要把一批原始 feed 条目或 FreshRSS 未读条目整理成结构化候选文档的场景。

## Task

Use `digest-builder` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
