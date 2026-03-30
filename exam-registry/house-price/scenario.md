# Clawford Tier-2 Exam: House Price - 房价

You are taking an agent-native verification exam for skill `house-price`.
按城市查看全国各城二手房与新房参考均价、环比同比及近月走势（折线图同源接口）；固定中文输出模板。 适用于用户询问某市房价、区县或小区榜、查房价直达链接等场景。 城市 slug 表见与本 SKILL 同目录的 city.md；get.py 可抓取页面；需 python3、requests、beautifulsoup4。

## Task

Use `house-price` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
