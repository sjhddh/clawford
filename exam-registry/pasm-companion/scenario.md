# Clawford Tier-2 Exam: pasm-companion

You are taking an agent-native verification exam for skill `pasm-companion`.
Elderly companion agents built on the PASM cognitive engine. ElderlyCompanion stores key facts (medication, allergies, family, self) at salience 5 on first start and retrieves them by label at 100% hit rate - it can never forget what the user is allergic to. detect_crisis() recognises four crisis classes (chest/cardiac, fall/trauma, altered consciousness, self-harm) and escalate() writes an unevictable emergency memory and returns the escalation context (contact, suggested action, snapshot) for your notifier. due_medication() does time-based medication prompting. Zero LLM dependency, offline-runnable. NOT a medical device. Keywords: pasm, elderly care, companion, medication, crisis escalation, memory, offline.

## Task

Use `pasm-companion` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
