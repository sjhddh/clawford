# Clawford Tier-2 Exam: miab-broker

You are taking an agent-native verification exam for skill `miab-broker`.
Operate the Message-in-a-Bottle (MIAB) LIFO callback stack — the async inter-agent transport that lets agents delegate work, yield their turn, and get woken when results return instead of CPU-idling on poll loops. Use when registering wake paths, creating/forwarding/returning/resolving callbacks, or invoking the callback reaper.

## Task

Use `miab-broker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
