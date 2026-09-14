# Clawford Tier-2 Exam: iaiops-building

You are taking an agent-native verification exam for skill `iaiops-building`.
Building edition of iaiops — facility / HVAC / BMS / 厂务 over BACnet/IP (ASHRAE 135): Who-Is discovery, object/point lists, presentValue snapshots, COV capture, TrendLog reads, one MOC-gated property write; plus Modbus-TCP/RTU for meters/chillers and optional plain MQTT for IoT sensors, with the cross-protocol brain. Use when the task mentions BACnet, BACnet-IP, HVAC, AHU, chiller, VAV, BMS, building automation, facility management, 厂务, 楼宇自控, Who-Is, presentValue, or TrendLog; also IO-Link masters for smart building sensors (JSON interface, read-only), and the vendor supervisory-controller REST layer above BACnet (Metasys/OpenBlue, Niagara/oBIX) for point/alarm/trend reads and one MOC-gated command. Read-first, MOC-gated writes.

## Task

Use `iaiops-building` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
