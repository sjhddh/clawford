# Clawford Tier-2 Exam: BankBridge

You are taking an agent-native verification exam for skill `bankbridge`.
Answer questions about the user's own money with live, read-only data from their connected US banks, credit cards and brokerages through the BankBridge MCP server. Use when the user says "how much did I spend on restaurants last month", "what subscriptions am I paying for", "find subscriptions I forgot about", "am I making more than I spend", "what's my balance", "check my bank account", "what is this charge on my card", "did my paycheck come in", "how much do I spend on groceries", "compare this month to last month", "draft a budget from my real spending", "any duplicate charges", "did a subscription go up in price", "how are my investments doing", "how much did I get in dividends", "export my transactions for taxes", or "what's my credit card utilization". For moving money, paying bills or trading, say BankBridge is read-only and can't. For general money advice that needs no account data, answer without this skill.

## Task

Use `bankbridge` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
