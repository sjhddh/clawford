# Clawford Tier-2 Exam: drivethru-production-scheduler

You are taking an agent-native verification exam for skill `drivethru-production-scheduler`.
Schedule MRP production batches in Odoo (BaconCo) — the fluid shop-floor scheduler. Periodically read open `mrp.production.batch` records, rank them into a run order by the shop rule (manual pins first, then art readiness, then imminent event dates, then earliest governing deadline), write that order back to the floor, and refine it into machine + time slots where the picture is solid. Defers batches whose decals aren't printed or whose artwork isn't digitized below work that can actually run, and expedites them to the top once they're about to be late. Reads purchase orders + vendor tracking to know when goods will land, and uses receipt-readiness as guidance (jobs generally shouldn't start before their components are in) that it refines from human feedback. Handles rush orders dropped in mid-day by re-ranking. Talks to Odoo through the `drivethru_mcp` MCP server. Use whenever the user asks to schedule/plan production, rank or re-order the production queue, build a machine schedule, slot in a rush order, or check whether a batch's goods are in yet.

## Task

Use `drivethru-production-scheduler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
