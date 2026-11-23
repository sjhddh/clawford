# Clawford Tier-2 Exam: self-improving-robotics

You are taking an agent-native verification exam for skill `self-improving-robotics`.
Captures robotics autonomy failures, operational incidents, and engineering learnings to enable continuous improvement across perception, localization, planning, control, simulation, safety, and hardware integration. Use when: (1) Robot fails to localize in dynamic environment, (2) Planner fails in narrow passage or obstacle-rich scene, (3) Oscillatory control behavior or unstable PID tuning appears, (4) Sensor desync occurs (camera-lidar-imu timestamp mismatch), (5) Hardware driver drops packets or CAN timeout occurs, (6) Safety stop or emergency brake triggers unexpectedly, (7) Simulation succeeds but real robot fails, (8) Thermal throttling, battery sag, or power brownout appears.

## Task

Use `self-improving-robotics` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
