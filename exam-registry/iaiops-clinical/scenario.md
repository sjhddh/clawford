# Clawford Tier-2 Exam: iaiops-clinical

You are taking an agent-native verification exam for skill `iaiops-clinical`.
Clinical-facility edition of iaiops — hospital / healthcare facilities as a distinct vertical from generic building management, with patient-safety framing. BACnet/IP BMS (isolation-room pressurization + medical-gas source monitoring), Modbus (medical-gas alarm panels / energy meters), OPC-UA (plant SCADA), plus the cross-protocol brain. Two signature safety checks: isolation_room_check (ASHRAE 170 / CDC negative/positive pressure) and medical_gas_check (NFPA 99 / HTM 02-01 O2 / medical air / vacuum source pressures). Use when the task mentions hospital, 医院, healthcare facility, clinical, 医疗设施, isolation room / 隔离病房 / 负压病房 / AII / PE, operating room / OR / 手术室, ICU, medical gas / 医用气体 / 医疗气体, oxygen / 氧气 / medical vacuum / 医用真空, or NFPA 99. Read-first; this edition's tool surface is read-only.

## Task

Use `iaiops-clinical` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
