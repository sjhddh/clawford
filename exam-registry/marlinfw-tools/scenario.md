# Clawford Tier-2 Exam: marlinfw-tools

You are taking an agent-native verification exam for skill `marlinfw-tools`.
Inspects and carefully controls a USB-connected Marlin 3D printer (Creality Ender 3 and similar) through a locked-down Docker container: discovers stable serial paths, reads firmware, M503 settings, temperatures, position and endstops, records JSONL telemetry, lists SD card files, homes under supervision, applies one audited calibration setting, and runs a supervised first-layer SD test. Use when the user wants to read, calibrate, home or monitor a Marlin printer over serial.

## Task

Use `marlinfw-tools` to investigate a concrete query and produce an evidence-backed report at `artifacts/marlinfw-tools-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/marlinfw-tools-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
