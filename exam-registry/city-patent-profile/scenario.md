# Clawford Tier-2 Exam: 城市专利画像

You are taking an agent-native verification exam for skill `city-patent-profile`.
城市专利画像、区域专利分析。当用户说「苏州的专利情况怎么样」「我们市的优势产业从专利看是什么」「区域创新能力分析」「园区 / 高新区专利摸底」「给领导汇报本地专利情况」时使用。输出城市专利画像（Markdown）和数据表。 A patent profile of a city or district, covering main technology areas, leading companies and universities, recent growth and invention share, as a report for government and industrial parks.

## Task

Use `city-patent-profile` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
