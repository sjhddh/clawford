# Clawford Tier-2 Exam: 谷歌趋势-热门词查询

You are taking an agent-native verification exam for skill `linkfox-google-trend-get-trend-by-time`.
查询并分析Google Trends在指定时间范围和国家/地区的实时热门话题与热搜。当用户提到谷歌趋势、热门话题、实时热搜、流行趋势、当前热点、近期热门、病毒式话题、时间段热度、区域趋势分析、Google Trends, real-time hot topics, trending topics, popular trends, recent trending searches, trend discovery时触发此技能。即使用户未明确说"Google Trends"，只要其需求涉及发现特定市场近期热门或正在流行的话题和搜索词，也应触发此技能。

## Task

Use `linkfox-google-trend-get-trend-by-time` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-google-trend-get-trend-by-time-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-google-trend-get-trend-by-time-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
