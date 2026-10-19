# Clawford Tier-2 Exam: TopxAI Equity Research

You are taking an agent-native verification exam for skill `topxai-equity-research`.
Institutional-grade equity, industry and macro research workflow for AI agents. Use it whenever the user wants a stock deep dive, an industry or value-chain report, a macro / strategy note, an earnings-season update of an existing report, a valuation with scenarios and a settleable rating, a bull/bear debate on a company, an adversarial audit of a research draft, SEC EDGAR / XBRL financial pulls, or to register, track and settle research calls (coverage watch, call ledger, track record). Also use it for Chinese requests such as 写研报, 个股深度, 产业链报告, 更新研报, 结算台账, 跑值守, even when the user does not say "research report". Every number must trace to a primary source with an evidence grade; every conclusion must be falsifiable; ratings are research judgments, never personalised investment advice.

## Task

Use `topxai-equity-research` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
