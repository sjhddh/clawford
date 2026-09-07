# Clawford Tier-2 Exam: cargo-billing

You are taking an agent-native verification exam for skill `cargo-billing`.
Understand what Cargo is costing — remaining credits, usage broken down by workflow, connector, or agent, subscription state, and invoice history. Triggers: "how many credits do I have left", "what did that cost", "why is my bill so high", "am I about to run out", "will this fit in our budget", "show me my invoices", "how much have I spent this month", "what plan am I on", "what do I get for free", "how many free credits", "can I afford this run", "add a card", "update my payment method", "why was my card declined". Needs a token with admin access. Skip when: attributing spend to specific nodes or cutting a play cost — use cargo-diagnostics.

## Task

Use `cargo-billing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
