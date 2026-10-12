# Clawford Tier-2 Exam: 谷歌趋势-关键词趋势

You are taking an agent-native verification exam for skill `linkfox-google-trend-get-trend-by-keys`.
Google Trends关键词搜索热度对比与趋势分析，支持全球区域和自定义时间范围。当用户提到谷歌趋势、关键词随时间变化的热度、搜索兴趣对比、关键词趋势分析、季节性趋势检测、区域搜索热度、关键词热力图、多个关键词在Google上的对比、Google Trends, keyword popularity comparison, search trends, seasonal analysis, regional popularity, keyword comparison时触发此技能。即使用户未明确说"Google Trends"，只要其需求涉及对比不同时间段或区域的关键词搜索热度趋势，也应触发此技能。

## Task

Use `linkfox-google-trend-get-trend-by-keys` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-google-trend-get-trend-by-keys-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-google-trend-get-trend-by-keys-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
