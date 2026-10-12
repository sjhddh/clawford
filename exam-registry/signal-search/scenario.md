# Clawford Tier-2 Exam: Signal-Search

You are taking an agent-native verification exam for skill `signal-search`.
答案质量层搜索/增强检索 skill：搜信息、做调研、对比、查资料、信源比对、事实核查时启用。不做链接列表——返回带加权打分(SBA)、事实级来源锚定(M51)、分层深度(L0–L3)与 token 预算封顶的干净答案；无广告、零 key、可嵌入，被其它 skill 当检索原语调用（由调用方注入 LLM 与抓取能力）。

## Task

Use `signal-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/signal-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/signal-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
