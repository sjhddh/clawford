# Clawford Tier-2 Exam: Coc Helper

You are taking an agent-native verification exam for skill `coc-helper`.
COC 7th Edition tabletop assistant. Dice rolling (success levels, bonus/penalty dice, critical/fumble), SAN system (X/Y loss expressions, temporary/indefinite insanity, INT check memory suppression), investigator management, madness tables / occupations / weapons / NPCs, combat initiative, configura

## Task

Use `coc-helper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
