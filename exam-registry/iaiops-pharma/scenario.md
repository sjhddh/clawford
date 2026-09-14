# Clawford Tier-2 Exam: iaiops-pharma

You are taking an agent-native verification exam for skill `iaiops-pharma`.
Pharmaceutical-manufacturing edition of iaiops — GMP drug/biologics plants as a distinct vertical from generic buildings and municipal water. BACnet/IP BMS+EMS (cleanroom pressure cascade, temperature/RH), Modbus (PW/WFI skids, stills, EDI, analysers), HART-IP (conductivity / TOC / level transmitters), OPC-UA (DCS, bioreactors, plant SCADA), plus the cross-protocol brain. Three signature checks: cleanroom_pressure_cascade (EU GMP Annex 1 cascade, door by door), cleanroom_particle_check and pharma_water_check (USP <645> stage-1 procedure). Use when the task mentions pharma, 制药, 药厂, GMP, cleanroom / 洁净室 / 洁净区, Annex 1, 压差梯度, pressure cascade, grade A/B/C/D, 尘埃粒子 / particle count, EMS / 环境监测, PW / WFI / 纯化水 / 注射用水, TOC, 电导率, conductivity, bioreactor / 生物反应器, 冻干机 / lyophilizer, 灌装线 / filling line, CSV, IQ/OQ, Annex 11, Part 11, or 数据完整性 / ALCOA. Read-first; this edition's tool surface is read-only.

## Task

Use `iaiops-pharma` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
