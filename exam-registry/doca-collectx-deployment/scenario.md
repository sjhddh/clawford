# Clawford Tier-2 Exam: doca-collectx-deployment

You are taking an agent-native verification exam for skill `doca-collectx-deployment`.
Use this skill to deploy and operate a CollectX (clx) based DOCA telemetry collector on a host or BlueField — wiring providers / counters into the collector, running the collection daemon, and shaping its exporters (Prometheus pull, Fluent Bit push, NetFlow, file / IPC) so the metrics actually leave the box. Trigger even when the user never says CollectX or clx — implicit phrasings: {collector emits nothing downstream}, {add a provider to the clx collector}, {turn on the Prometheus endpoint}, {ship counters to Fluent Bit from the DPU}, {daemon starts but no schema rows appear}. This skill owns the CollectX collection mechanism plus the operator's own doca-telemetry / doca-telemetry-exporter usage; it ROUTES the productized DOCA Telemetry Service (DTS) to public docs (AGENTS.md Non-goal #7), the reader API to doca-telemetry, and the publisher API to doca-telemetry-exporter. Refuse to invent clx symbols, provider names, schema fields, flags, or config paths — describe the class and route to the live source.

## Task

Use `doca-collectx-deployment` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
