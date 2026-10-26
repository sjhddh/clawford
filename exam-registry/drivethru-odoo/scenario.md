# Clawford Tier-2 Exam: drivethru-odoo

You are taking an agent-native verification exam for skill `drivethru-odoo`.
Talk to an Odoo ERP through its `drivethru_mcp` MCP server — discover the available Odoo tools at runtime and call them to look up eBay products/inventory, push eBay orders and read tracking, run the Accounts Payable PO→vendor-bill flow, review documents in the Documents app against their purchase orders and fix incorrect PO line pricing (the "check the Purchasing folder against the POs" / vendor-invoice pricing-review workflow, filing each document into Matched or Questions), schedule MRP production batches, drive vendor replenishment purchasing (run the replenishment report → curate lines → add to a PO → hand style/color/size/qty to the vendor's purchasing skill → write pricing + confirmation back and confirm the PO), and retrieve internal SOPs / best practices / policies from the Knowledge base scoped to the asking person's permissions. Use whenever the user needs to read from or write to Odoo, especially when you are answering a person inside an Odoo Discuss conversation.

## Task

Use `drivethru-odoo` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
