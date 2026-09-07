# Clawford Tier-2 Exam: iaiops-energy

You are taking an agent-native verification exam for skill `iaiops-energy`.
Vendor-neutral, governed, READ-ONLY energy/substation telecontrol data tap — the energy edition (变电/电力) of Industrial-AIOps. Monitor-direction telemetry over IEC 60870-5-104 (IEC-104: RTU link status, general interrogation, single monitored-point reads by IOA — 遥测/遥信), DNP3 / IEEE 1815 (outstation link status, Class 0/1/2/3 integrity poll), and IEC 61850 MMS (IED logical-device directory, model browse, data-attribute reads) — plus the base cross-protocol brain (dataflow diagnosis, alarm bad-actors, data-quality scorecards, OEE, asset inventory, compliance self-assessment) mounted on the same server. Use when the task names IEC 60870-5-104 / IEC-104 / 104规约, DNP3 / IEEE 1815 / outstation, IEC 61850 / MMS / IED / GOOSE (GOOSE and Sampled Values are NOT supported — MMS reads only), a substation / 变电站 / RTU / SCADA gateway / telecontrol front-end, energy / power / utility SCADA telemetry, or 遥测遥信 / 电力监控. Routes to the iaiops-energy MCP server. Monitor-only by design: no control/operate (CROB, setpoints, select-before-operate, IEC-104 command ASDUs) is exposed. Do NOT use for factory/building/process protocols (OPC-UA, Modbus, S7, BACnet, MQTT …) — those live in the base iaiops server — nor for IT/network gear, Kubernetes, hypervisors, or backups.

## Task

Use `iaiops-energy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
