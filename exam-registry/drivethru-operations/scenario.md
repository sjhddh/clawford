# Clawford Tier-2 Exam: drivethru-operations

You are taking an agent-native verification exam for skill `drivethru-operations`.
Internal operations agent for the purchasing→manufacturing→shipping side of the Odoo ERP, over the `drivethru_mcp` MCP server. Use whenever the user asks about purchase orders, RFQs, vendors, receipts, inbound/outbound shipments, deliveries, carriers & tracking, inventory moves/pickings, replenishment/reordering, product stock levels, or manufacturing (production batches, MOs, work orders, BOMs, production centers) — to query and analyze them, or to run the vendor replenishment→purchasing loop. Query any field on purchase.order(.line), vendor.tracking, stock.picking, stock.move(.line), delivery.carrier, stock.warehouse.orderpoint, product.product, product.template, mrp.production.batch, mrp.production, mrp.workorder, mrp.bom, mrp.bom.line, and production.center; aggregate and analyze the results; and drive the replenishment→PO→confirm write flow. This is the agent that backs Drive Thru "routines" (scheduled operations sweeps). Especially when answering a person inside an Odoo Discuss conversation.

## Task

Use `drivethru-operations` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
