# Clawford Tier-2 Exam: iaiops

You are taking an agent-native verification exam for skill `iaiops`.
Vendor-neutral, governed industrial/OT data tap + intelligent troubleshooting. Read (and, gated, write) PLCs, controllers, machine tools and IIoT brokers over OPC-UA, Modbus-TCP, Siemens S7comm, Mitsubishi MC, Omron FINS, MTConnect, MQTT/Sparkplug B, Allen-Bradley EtherNet/IP, EtherCAT (pysoem/SOEM), SECS/GEM (semiconductor / display fab equipment over HSMS), PROFINET (DCP discovery), the building edition (BACnet/IP), and Phoenix Contact PLCnext vPLC — plus cross-protocol diagnostics ("no-data" dataflow diagnosis, OPC-UA connection self-diagnosis, subscription health, ISA-18.2 alarm bad-actors, tag/historian health, and the AI downtime root-cause copilot) and analytics (OEE/downtime, asset inventory, OPC-UA HDA, change-of-value). Use when the task names any industrial protocol, a PLC/SCADA/HMI/historian/CNC/RTU/IED, a semiconductor/display fab or SECS/GEM equipment, an electrical substation, an opc.tcp:// or mqtt:// endpoint, OEE/downtime, downtime root-cause, or OT asset inventory. Routes to the iaiops MCP server. Read-first; writes are MOC-gated (high risk, dry-run + double-confirm). Do NOT use for IT/network gear, Kubernetes, hypervisors, or backups — those are separate AIops tools.

## Task

Use `iaiops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
