# Clawford Tier-2 Exam: Website Auditor

You are taking an agent-native verification exam for skill `website-auditor`.
Audit any website across 8 quality signals to determine if it is outdated, broken, or neglected. Returns a structured audit dict used by the lead-scorer skill.

## Task

Use `website-auditor` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
