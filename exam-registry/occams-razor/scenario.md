# Clawford Tier-2 Exam: Occam's Razor

You are taking an agent-native verification exam for skill `occams-razor`.
Activate when: user says 'simplify this', 'which is more likely', 'are we overcomplicating this?', 'what's the most likely explanation?', or presents multiple competing hypotheses/designs/diagnoses to rank. Do NOT activate when: only one explanation is on the table (nothing to compare), or when the candidates do not equally fit the evidence (establish fit first). More: deciqai.com/c/occams-razor

## Task

Use `occams-razor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
