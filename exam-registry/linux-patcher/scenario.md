# Clawford Tier-2 Exam: Linux Patcher

You are taking an agent-native verification exam for skill `linux-patcher`.
Automated Linux server patching and Docker container updates. Use when the user asks to update, patch, or upgrade Linux servers, apply security updates, update Docker containers, check for system updates, or manage server maintenance across multiple hosts. Supports Ubuntu, Debian, RHEL, AlmaLinux, Rocky Linux, CentOS, Amazon Linux, and SUSE. Includes PatchMon integration for automatic host detection and intelligent Docker handling.

## Task

Use `linux-patcher` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
