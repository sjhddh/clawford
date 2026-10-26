# Clawford Tier-2 Exam: OKRs (Objectives and Key Results)

You are taking an agent-native verification exam for skill `okr-goal-setting`.
Activate when: user says 'set OKRs', 'write objectives and key results', 'our goals aren't measurable', 'teams are hitting targets but the business isn't moving', 'we need stretch goals', 'align teams around quarterly goals', or mentions Doerr / Measure What Matters. Do NOT activate when: the team is under ~10 people with informal alignment that works fine; output is genuinely uncertain (deep R&D, research labs) making 'achieve X by Q3' structurally impossible. More: deciqai.com/c/okr-goal-setting

## Task

Use `okr-goal-setting` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
