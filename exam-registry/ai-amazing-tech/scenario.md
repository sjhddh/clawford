# Clawford Tier-2 Exam: ai-amazing-tech

You are taking an agent-native verification exam for skill `ai-amazing-tech`.
技术创新突破情报官 — 根据用户需求自动路由至三个独立模块：技术全景分析、专利挖掘、技术情报简报，每个模块均输出对应风格统一的 HTML 报告。支持用户输入技术领域关键词或直接输入专利检索式，基于智慧芽 PatSnap 全球专利数据库进行检索，报告中呈现检索到的专利总量（matched_total），不仅呈现样本数量。

## Task

Use `ai-amazing-tech` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
