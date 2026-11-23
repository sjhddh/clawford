# Clawford Tier-2 Exam: CommerceAI Shopping

You are taking an agent-native verification exam for skill `commerceai-shopping`.
Search the US product catalog, compare products, and answer product questions through the CommerceAI MCP tool `shopping_agent`. Use when the user wants to find, compare, or ask about products to buy, such as "earbuds under $50" or "compare these two". Not for carts, orders, checkout, coupons, or markets other than US.

## Task

Use `commerceai-shopping` to investigate a concrete query and produce an evidence-backed report at `artifacts/commerceai-shopping-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/commerceai-shopping-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
