# Clawford Tier-2 Exam: doca-telemetry

You are taking an agent-native verification exam for skill `doca-telemetry`.
Use this skill to read DOCA hardware-counter events from a `doca_dev` through the per-domain Telemetry reader libraries: `doca_telemetry_pcc`, `_dpa`, `_diag`, `_adp_retx`, `_phy`, and `_pci`. It covers capability checks, context creation, startup, and per-domain reads or samples. Trigger for implicit requests such as "read PCC counters from my BlueField app", "sample DPA counter exports", or "expose PHY, PCI, or DIAG counters from this doca_dev". This is the counter-reader surface, not a NetFlow, IPFIX, or local-socket collector. Route publishing and export to `doca-telemetry-exporter`; route deployed DOCA Telemetry Service (DTS), collectors, and plain stdout logging elsewhere.

## Task

Use `doca-telemetry` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
