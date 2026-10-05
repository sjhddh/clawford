# Clawford Tier-2 Exam: drivethru-digitize-outsourcing

You are taking an agent-native verification exam for skill `drivethru-digitize-outsourcing`.
Outsource embroidery digitizing end to end for BaconCo (Odoo). On a routine, read the `digitize.demand` records that are Ready to send out, pull the decoration's embroidery artwork + specs (production PNG, AI source file, height/width, thread-colour names, ship date), download the two files, decide rush from the ship date, submit the job to the outside digitizer via the `artworklady-digitizing` skill with a brief that states the size and colours, and — only on a confirmed submission — transition the demand to Outsource in Odoo. Talks to Odoo through the `drivethru_mcp` MCP server (digitize_demand_* + decoration_* tools) and hands the actual portal submission to the `artworklady-digitizing` skill. Idempotent: it only ever works Ready demands and marks them outsourced after a confirmed send, so a retry can't double-post. Use whenever the user asks to outsource digitizing, send embroidery jobs to the digitizer / Artwork Lady, receive digitized files back, or run the digitizing-outsourcing routine. It also runs the RETURN leg: for demands already Outsourced, fetch the finished stitch file (DST) from the digitizer by job number and upload it to Odoo via `digitize_demand_upload`, advancing the demand Outsource → Sew Out, then parse the job's Production Worksheet PDF and push its stitch count, sewn size, and Stop-Sequence thread colours onto the decoration via `digitize_demand_apply_worksheet`, and file the vendor's returned files (worksheet PDF, DST, native design) away on the agent's own persistent storage — organized by job, retrievable on request, not in Odoo.

## Task

Use `drivethru-digitize-outsourcing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
