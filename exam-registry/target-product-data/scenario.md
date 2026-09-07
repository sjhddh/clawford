# Clawford Tier-2 Exam: Scavio Target

You are taking an agent-native verification exam for skill `target-product-data`.
Search Target.com, browse a category, read product detail by TCIN and pull reviews with the rating breakdown as structured JSON. 4 endpoints, 1 credit each, store-aware pricing via store_id.

## Task

Use `target-product-data` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
