# Clawford Tier-2 Exam: WHMCS Invoice-Only Safety Guard

You are taking an agent-native verification exam for skill `whmcs-invoice-only-safety`.
Use when building or reviewing an authorized WHMCS invoice-only order adapter that creates an unpaid invoice and never takes payment. Covers pinned-product preconditions, login/cart verification, checkout field discipline, single-submit semantics, and post-submit invoice validation. Use when creating a WHMCS order that stops at an unpaid invoice, or auditing automation for accidental payment.

## Task

Use `whmcs-invoice-only-safety` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
