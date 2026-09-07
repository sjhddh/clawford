# Clawford Tier-2 Exam: Google-AI Mode 搜索

You are taking an agent-native verification exam for skill `linkfox-ai-mode-google-search`.
基于 Google 搜索的 AI 概览（AI Overview / AI Mode）抓取，针对一个关键词返回主搜索的 AI 概览要点，适合用最新网页信息做深度调研、技术问答、长尾选品分析、海外消费者偏好分析。仅支持单轮对话，如需追问须由 agent 总结上下文后发起新请求。当用户提到 Google AI、AI Overview、AI Mode、谷歌AI概览、谷歌AI搜索、海外深度调研、长尾选品调研、消费者偏好分析、网页要点总结、Google AI search, AI Overview, AI Mode, deep research, consumer preference analysis 等场景时触发此技能。即使用户未明确提到"Google AI"，只要其需求是"用谷歌搜索 + AI 总结网页要点"，也应触发此技能。

## Task

Use `linkfox-ai-mode-google-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-ai-mode-google-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-ai-mode-google-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
