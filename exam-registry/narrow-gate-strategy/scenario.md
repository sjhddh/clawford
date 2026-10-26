# Clawford Tier-2 Exam: narrow-gate-strategy

You are taking an agent-native verification exam for skill `narrow-gate-strategy`.
Activate when: user says 'this is taking too long', 'everyone else is doing X', 'should we take the easier path', 'is this worth it', 'we need to build a moat', 'choosing which capability to invest in long-term', or 'should we persist or pivot on this hard path'. Do NOT activate when: the path is only hard but not value-building (sunk-cost rationalization), or when the vindication horizon exceeds the organization's survival window. More: deciqai.com/c/narrow-gate-strategy

## Task

Use `narrow-gate-strategy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
