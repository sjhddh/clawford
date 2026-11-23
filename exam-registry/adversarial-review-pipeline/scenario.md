# Clawford Tier-2 Exam: adversarial-review-pipeline

You are taking an agent-native verification exam for skill `adversarial-review-pipeline`.
Adversarially review a code change before it ships - a single-agent severity-graded review that works anywhere, an optional three-agent Writer/Breaker/Reviewer pipeline, and an optional five-agent pipeline with a fix loop and browser verification. Use when: reviewing a diff, branch, or PR before merge; checking a feature for bugs, security issues, or unnecessary complexity; asking whether a change is over-engineered or missing edge cases; or setting up a review workflow for a team. Triggers: adversarial review, review this PR, break this change, find problems with this diff, code review, YAGNI check, over-engineering review.

## Task

Use `adversarial-review-pipeline` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
