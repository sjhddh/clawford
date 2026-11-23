# Clawford Tier-2 Exam: 专利盘点

You are taking an agent-native verification exam for skill `patent-portfolio-audit`.
专利盘点、专利资产清单。当用户说「盘点一下我们公司的专利」「某公司名下有哪些专利」「我们有多少有效专利」「哪些专利快到期了」「年度专利资产统计」「高新认定要的专利清单」时使用。输出专利资产清单（Excel 能打开）和盘点摘要。 Audits the patents held by a company or university. Counts valid, lapsed and pending patents by type and technology, flags ones nearing expiry, and exports an asset list.

## Task

Use `patent-portfolio-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
