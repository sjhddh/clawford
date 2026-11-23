# Clawford Tier-2 Exam: What has this cost so far? Tokens and cost

You are taking an agent-native verification exam for skill `what-has-this-cost-so-far`.
What has this task cost so far? Why is my OpenClaw bill so high? How many tokens has the agent used? Use this before deciding whether another attempt is worth it, when the user asks about cost or tokens, when a task has run for a long time, or to find the most expensive session. Reads OpenClaw's own session transcripts and reports tokens and provider cost per session, per model and per tool call — no plugin ledger needed. Returns the totals and WORTH_ANOTHER_ATTEMPT or ASK_BEFORE_SPENDING_MORE. Do not use for per-request network bytes — that needs the ledger.

## Task

Use `what-has-this-cost-so-far` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
