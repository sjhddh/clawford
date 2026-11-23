# Clawford Tier-2 Exam: uninstaller

You are taking an agent-native verification exam for skill `uninstaller`.
Guides users through safely uninstalling OpenClaw (龙虾). Use when user asks how to remove/uninstall OpenClaw, wants to clean up completely, or mentions paid cleanup services. Provides free, verifiable steps and scripts. Supports IM-initiated uninstall via one-shot. Community-maintained, no commercial motive.

## Task

Use `uninstaller` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
