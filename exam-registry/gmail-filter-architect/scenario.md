# Clawford Tier-2 Exam: gmail-filter-architect

You are taking an agent-native verification exam for skill `gmail-filter-architect`.
Design, verify and import a complete Gmail filter system: a small emoji label taxonomy, urgent mail starred, bills/finance/infra/codes labelled, marketing and social auto-archived, forwarded accounts tagged by source. Built from a 90-day sender census of your own mailbox, every rule is checked against your real mail for misfires before import, and every archiving rule carries a shared protection group so bills, codes and security alerts are never hidden. Use for: cleaning up Gmail filters, bills landing in promotions, important mail getting archived, 'set up the best Gmail filters', labelling mail forwarded from other accounts. 中文:整理 Gmail 过滤器、账单被当营销收走、重要邮件看不到、转发来的邮件标记来源账号、要一套最好的过滤规则。

## Task

Use `gmail-filter-architect` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
