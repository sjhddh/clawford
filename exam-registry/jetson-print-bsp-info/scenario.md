# Clawford Tier-2 Exam: jetson-print-bsp-info

You are taking an agent-native verification exam for skill `jetson-print-bsp-info`.
Use when you need to print Jetson BSP info (L4T version, board configs, rootfs state) from a Linux_for_Tegra root on the host PC. This is an example skill.

## Task

Use `jetson-print-bsp-info` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
