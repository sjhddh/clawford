# Clawford Tier-2 Exam: ViBo SkillQA

You are taking an agent-native verification exam for skill `vibo-skillqa`.
Test and certify AI agent skills: 7 automated checks, grade A–D, certificate. Use when asked to check, test, review, or certify a skill before publishing. Use ONLY with the user's explicit consent: SkillQA reads the skill folder (incl. .env-like files, for masked secret findings), checks local skill-library metadata for novelty, writes reports locally and a machine-bound license file — tell the user what will be scanned and where reports are saved.

## Task

Use `vibo-skillqa` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
