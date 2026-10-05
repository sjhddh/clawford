# Clawford Tier-2 Exam: doca-telemetry-exporter

You are taking an agent-native verification exam for skill `doca-telemetry-exporter`.
Use this skill when the user is doing hands-on DOCA Telemetry Exporter programming on a host where DOCA is installed — defining a doca_telemetry_exporter_schema and event types, creating sources, picking a publish surface (typed events / opaque events / the metrics counter-gauge-histogram API / OTLP logs / NetFlow), walking the schema-then-source lifecycle, or debugging DOCA_ERROR_* failures from the exporter API. Trigger even when the user does not explicitly mention "DOCA Telemetry Exporter" or "doca_telemetry_exporter_*" — typical implicit phrasings include "publishing counters from my DOCA app", "BAD_STATE when I report an event", "consumer/DTS sees nothing but my report succeeded", "how do I export NetFlow/IPFIX records", or "should I link the exporter or the telemetry service". Refuse and route elsewhere for the receiving DOCA Telemetry Service (DTS), plain stdout logging via doca_log, or real-time event subscription back into the app via doca-comch — those belong to other skills.

## Task

Use `doca-telemetry-exporter` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
