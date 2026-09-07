# Clawford Tier-2 Exam: stock-terminal

You are taking an agent-native verification exam for skill `stock-terminal`.
Stock terminal for AI agents. Turns chat into a futuristic financial terminal: typed commands like "open NVDA", "screen smart-money", "daily brief", or natural questions like "what's hot today?" return composite synthesized reports across price, sentiment, insider trades, congressional disclosures, institutional flows, analyst ratings, AI insights, and embedded news. Use for stock terminal, financial terminal for AI, daily market brief, open a ticker, screen stocks by smart money, what is hot today, one-command stock research. Read-only. No trading, no purchases, no write operations, no wallet access.

## Task

Use `stock-terminal` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
