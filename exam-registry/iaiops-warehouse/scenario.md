# Clawford Tier-2 Exam: iaiops-warehouse

You are taking an agent-native verification exam for skill `iaiops-warehouse`.
Warehouse / intralogistics edition of iaiops — distribution centers, fulfillment, material handling: conveyors, sorters, palletizers, AS/RS, and AGV/AMR fleets. EtherNet/IP (Allen-Bradley / Rockwell conveyor & sorter PLCs), Profinet (Siemens material-handling lines), Modbus (VFDs / energy meters, with conveyor_vfd & agv_battery templates), OPC-UA (WMS/WCS gateways), and MQTT-Sparkplug (AMR / IoT telemetry) — plus the cross-protocol brain: predictive maintenance (pdm_forecast for conveyor-drive bearing/thermal trend), downtime triage, OEE/throughput, and alarm analysis. Use when the task mentions warehouse, 仓储, 物流, intralogistics, distribution center / DC, fulfillment, conveyor / 输送线, sorter / 分拣, palletizer, AS/RS / 立体库, AGV / AMR / 移动机器人, WMS / WCS, or material handling. Read-first; this edition's tool surface is read-only.

## Task

Use `iaiops-warehouse` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
