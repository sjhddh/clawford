# Clawford Tier-2 Exam: grocery-price-book

You are taking an agent-native verification exam for skill `grocery-price-book`.
Use when grocery bills keep creeping up, when you want to know which store actually has the best prices on what YOU buy, or when deciding whether a bulk-club membership pays off — builds a personal price book from receipts (manual entry or receipt-file parsing), computes unit prices across package sizes and stores, tracks price history per item to expose shrinkflation and stealth increases, ranks stores by your-basket cost instead of generic averages, and answers bulk-buy and stock-up questions with real math (cost per serving, shelf-life breakeven, membership breakeven).

## Task

Use `grocery-price-book` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
