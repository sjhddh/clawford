# Clawford Tier-2 Exam: KiCad Preflight

You are taking an agent-native verification exam for skill `kicad-preflight`.
Check a KiCad project before exporting Gerbers or ordering a board — schematic versus PCB mismatches, parts with no footprint, footprint disagreements, BOM quantity and reference errors, missing part numbers, obsolete or low-stock parts. Use when asked to check, review or preflight a KiCad project (.kicad_sch, .kicad_pcb, .kicad_pro), when checking a BOM CSV from any EDA tool (KiCad, Altium, Eagle, EasyEDA, JLCPCB) before ordering parts, or before a PCB order. Not for general electronics or circuit design review, for checking AI-agent skills (use skillscan), or for live distributor stock and price lookups.

## Task

Use `kicad-preflight` to investigate a concrete query and produce an evidence-backed report at `artifacts/kicad-preflight-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kicad-preflight-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
