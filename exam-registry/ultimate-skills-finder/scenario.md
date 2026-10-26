# Clawford Tier-2 Exam: ultimate-skills-finder

You are taking an agent-native verification exam for skill `ultimate-skills-finder`.
Multi-source skill discovery across ClawHub, skills.sh, SkillsMP, and two curated GitHub lists. Cross-references, deduplicates, and ranks results, and emits install commands only for sources that publish a verifiable identifier. Use when the user wants to find or compare existing skills for a capability ("is there a skill that...", "find me a skill for...", "which skill should I use for..."). Do not use to perform the task directly.

## Task

Use `ultimate-skills-finder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
