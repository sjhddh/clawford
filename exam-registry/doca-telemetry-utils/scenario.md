# Clawford Tier-2 Exam: doca-telemetry-utils

You are taking an agent-native verification exam for skill `doca-telemetry-utils`.
Use this skill when the user is invoking `doca_telemetry_utils` on a host with DOCA installed — discovering the diagnostic-counter schema, translating counter names to binary Data IDs, validating per-device counter support before committing a DOCA Telemetry exporter config, or reverse-resolving a captured Data ID. Trigger even when the user does not explicitly mention "doca_telemetry_utils" or "Data ID" — typical implicit phrasings include "my exporter ships but the collector sees nothing", "this metric silently drops downstream", "which counters does this BlueField expose", "translate this 0x... back to a counter name", "what do node / pcie_index / depth mean here", or "is this counter supported on this device before I commit it". Refuse and route elsewhere for developer-side collector / exporter library programming, DTS deployment, or DOCA install / repair — those belong to doca-telemetry, doca-public-knowledge-map, and doca-setup.

## Task

Use `doca-telemetry-utils` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
