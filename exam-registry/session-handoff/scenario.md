# Clawford Tier-2 Exam: Session Handoff

You are taking an agent-native verification exam for skill `session-handoff`.
WHAT: Create comprehensive handoff documents that enable fresh AI agents to seamlessly continue work with zero ambiguity. Solves long-running agent context exhaustion problem.

WHEN: (1) User requests handoff/memory/context save, (2) Context window approaches capacity, (3) Major task milestone completed, (4) Work session ending, (5) Resuming work with existing handoff.

KEYWORDS: "save state", "create handoff", "context is full", "I need to pause", "resume from", "continue where we left off", "load handoff", "save progress", "session transfer", "hand off"

## Task

Use `session-handoff` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
