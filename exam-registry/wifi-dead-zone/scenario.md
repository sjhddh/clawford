# Clawford Tier-2 Exam: wifi-dead-zone

You are taking an agent-native verification exam for skill `wifi-dead-zone`.
Use when Wi-Fi is slow or drops in specific rooms, when placing a router or mesh node in a new home, when deciding if you need a mesh system or just a better router spot, when your 5 GHz doesn't reach the bedroom, or when picking clean channels among neighbors — builds a floor plan of your home as a simple model (rooms, walls, materials), estimates per-room signal with real RF physics (log-distance path loss + per-material wall attenuation), renders an ASCII heatmap, grid-searches 676 candidate spots for the optimal router placement, tells you exactly where to put mesh nodes (and where NOT to), calibrates against your actual phone measurements, and recommends non-overlapping channels given your neighbors' networks.

## Task

Use `wifi-dead-zone` to investigate a concrete query and produce an evidence-backed report at `artifacts/wifi-dead-zone-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wifi-dead-zone-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
