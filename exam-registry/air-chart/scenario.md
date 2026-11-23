# Clawford Tier-2 Exam: air-chart

You are taking an agent-native verification exam for skill `air-chart`.
Query global air-quality data (OpenAQ monitoring network) and render high-resolution trend charts via x-cmd Draw (URL-as-Data). Use when the user asks to "check/compare air quality in a city, PM2.5/PM10/ozone trends, or generate an air-quality chart". Supports single-city trends, multi-city comparison (up to 4 cities), multi-parameter charts, and multi-station snapshots; automatically prefers active government reference-grade stations, overlays WHO guideline lines, and aligns timestamps to station local time.

## Task

Use `air-chart` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
