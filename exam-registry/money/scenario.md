# Clawford Tier-2 Exam: Money

You are taking an agent-native verification exam for skill `money`.
Decides where money goes next: which debt to clear first, how big the emergency fund must be, what to save, and whether a purchase is affordable. Use when the question is "should I pay this off or invest it", "how much do I need saved", "can I afford this", "rent or buy", "am I on track to stop working", or "where does my money even go"; when a raise, bonus, inheritance, equity vest or business sale lands and nobody has decided what to do with it; when a card is at 20% and only minimums are going out; when a job ends, a diagnosis arrives, a marriage ends, or income suddenly swings; when a credit score drops or a loan is refused; or when judging a pitch, an adviser's fee, or a "guaranteed" return. Covers savings rate, order of operations, real-versus-nominal maths, and fee drag. Not for picking funds or brokers (`invest`), building a tracker or importing statements (`personal-finance-tracker`), a recurring-payment list (`subscriptions`), or company finance (`cfo`).

## Task

Use `money` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
