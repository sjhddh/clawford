# Clawford Tier-2 Exam: 专利地域分布

You are taking an agent-native verification exam for skill `patent-region-map`.
专利地域分布、哪个地方专利多。当用户说「这个技术哪些省份专利多」「深圳 / 苏州在这方面有哪些企业」「招商引资找哪些企业」「产业园区专利摸底」「各国专利布局」时使用。输出地域分布表（Excel 能打开）和每个地区的主要单位。 Regional distribution of patents in a technology. Counts by province, by city within a province, or by country, with the leading organizations in each region, as a table.

## Task

Use `patent-region-map` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
