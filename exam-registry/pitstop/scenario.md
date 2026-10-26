# Clawford Tier-2 Exam: pitstop

You are taking an agent-native verification exam for skill `pitstop`.
Italian fuel-station prices (petrol, diesel, GPL, methane, HVO) and EV charging stations. Find cheapest by municipality / province / brand / coordinate, look up EV chargers near a place, get macro price stats. Backed by MIMIT Osservaprezzi Carburanti, OpenStreetMap (Overpass), and ISTAT comune coordinates. Use for "cheapest diesel near X in Italy", "fuel stations in <comune>", or "EV chargers near <comune>".

## Task

Use `pitstop` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
