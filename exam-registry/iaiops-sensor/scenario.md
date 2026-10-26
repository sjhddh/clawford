# Clawford Tier-2 Exam: iaiops-sensor

You are taking an agent-native verification exam for skill `iaiops-sensor`.
Sensor edition of iaiops — connect one industrial sensor and read it correctly: draft a sensor profile from a vendor IODD, check it, read one channel once with its unit, accuracy band and verification level, then collect. Covers sensors on Modbus RTU/TCP (RS-485 / RS-232 / RS-422 / USB serial, 4–20 mA via I/O modules), IO-Link masters (JSON interface) and MQTT/Sparkplug nodes. Use when the task mentions a sensor, sensor profile, IODD, IO-Link device, process data / pdin, decoding registers into engineering units, float32 word order, sentinel / no-target values, Modbus RTU instruments (RS-485 / RS-232), or "接一个传感器 / 传感器描述 / 读不懂寄存器 / 单位". The sensor tools are read-only and never write config; the server also exposes mqtt_publish (HIGH, MOC-gated) via the MQTT/Sparkplug set.

## Task

Use `iaiops-sensor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
