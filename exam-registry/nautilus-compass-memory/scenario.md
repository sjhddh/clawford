# Clawford Tier-2 Exam: nautilus-compass-memory

You are taking an agent-native verification exam for skill `nautilus-compass-memory`.
Local-first long-term memory for AI agents via MCP — zero LLM calls at write time, typed retrieval at read time. Use when session decisions and pitfalls should survive across days, when multiple agents or dialogs share facts on the same filesystem, or when you want drift detection so past mistakes don't repeat. Verified claims only — every published number ships as a byte-recomputable, ed25519-signed evidence pack.

## Task

Use `nautilus-compass-memory` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
