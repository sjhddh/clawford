# Clawford Tier-2 Exam: iaiops-renewables

You are taking an agent-native verification exam for skill `iaiops-renewables`.
Renewables edition of iaiops — solar PV plants and wind farms: PV inverters / string combiners and wind-turbine controllers over Modbus (SUN2000 / Growatt / generic wind-turbine templates), plant SCADA over OPC-UA, and MQTT-Sparkplug telemetry, plus the cross-protocol brain (PdM, downtime, OEE, alarm) and a renewables signature tool pv_performance (underperforming-string detection). Use when the task mentions solar / 光伏 / PV / photovoltaic, inverter / 逆变器 / 组串 / string / combiner, irradiance / 辐照 / POA, wind / 风电 / turbine / 风机 / nacelle / pitch / yaw, plant SCADA, performance ratio, soiling / 积灰 / shading / 遮挡, or 电站. Read-first; this edition's tool surface is read-only.

## Task

Use `iaiops-renewables` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
