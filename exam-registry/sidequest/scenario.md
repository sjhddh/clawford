# Clawford Tier-2 Exam: SideQuest: Hire Real People

You are taking an agent-native verification exam for skill `sidequest`.
Hire verified real people for paid real-world quests via SideQuest. Use when a task needs a human, such as calling a business, checking a store is open, taking photos at a place, inspecting an item, a pickup or return, waiting in line, native-speaker translation, or human review of AI output. Funds are held in escrow and released when you approve the proof.

## Task

Use `sidequest` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
