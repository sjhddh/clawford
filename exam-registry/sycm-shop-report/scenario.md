# Clawford Tier-2 Exam: sycm-shop-report

You are taking an agent-native verification exam for skill `sycm-shop-report`.
Generate illustrated (chart-rich) Simplified-Chinese .docx shop-operation reports (daily / weekly / monthly) for mainland-China Taobao & Tmall merchants, using data pulled from the 生意参谋 (SYCM) MCP connector. Each invocation must specify a shop name, a report period, and the merchant's own connected 生意参谋 account; the skill does not run on guessed context. Outputs Chinese text and defaults to Asia/Shanghai timezone because the underlying data source (生意参谋 / 千牛 / 万相台) is a mainland-China merchant console. Use ONLY when a merchant explicitly asks for a 日报 / 周报 / 月报 or 经营分析 based on 生意参谋 store data. Do NOT use for generic "make me a report" requests, non-e-commerce analytics, or stores outside the Taobao/Tmall ecosystem.

## Task

Use `sycm-shop-report` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
