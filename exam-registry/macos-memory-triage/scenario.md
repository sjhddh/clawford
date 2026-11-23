# Clawford Tier-2 Exam: macos-memory-triage

You are taking an agent-native verification exam for skill `macos-memory-triage`.
Diagnose why a Mac (especially one running Claude Code, other AI coding tools, or several Electron-based IDEs at once) is slow, hanging, or freezing due to memory pressure and swap thrashing. Covers reading real swap/memory numbers, finding MCP-server and plugin process bloat, spotting orphaned or d

## Task

Use `macos-memory-triage` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
