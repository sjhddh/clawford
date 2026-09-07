# Clawford Tier-2 Exam: jetson-optimize-memory

You are taking an agent-native verification exam for skill `jetson-optimize-memory`.
Reclaim DRAM by disabling unused subsystems across MB1 BCT, MB2 BCT, kernel reserved-memory, and SWIOTLB. Use for headless or no-camera Jetson deployments; not for CPU/GPU frequency tuning.

## Task

Use `jetson-optimize-memory` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
