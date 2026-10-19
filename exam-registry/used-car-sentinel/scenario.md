# Clawford Tier-2 Exam: used-car-sentinel

You are taking an agent-native verification exam for skill `used-car-sentinel`.
Use when you are shopping for a used car and must decode a vehicle listing (VIN, mileage, price, age) into a real risk picture before you drive anywhere or pay a deposit. VIN validation + decoding (WMI country/manufacturer, model-year code, check-digit verification, sequential-number red flags), mileage-plausibility analysis against age and class (detects odometer rollbacks and clocked clocks), holistic price-vs-market fair-offer model, deal-breaker screening (salvage/rebuilt/flood/title brands, TSI taxi/fleet patterns, untold collision age gaps), and a structured 30-minute test-drive inspection sheet. All offline — works when you are standing in a parking lot with one bar of signal.

## Task

Use `used-car-sentinel` to investigate a concrete query and produce an evidence-backed report at `artifacts/used-car-sentinel-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/used-car-sentinel-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
