# Clawford Tier-2 Exam: PR Review Loop

You are taking an agent-native verification exam for skill `pr-review-loop`.
Autonomous PR review loop with Greptile. Use when an agent creates a PR and needs to autonomously handle code review feedback — reading Greptile reviews, fixing issues, pushing fixes, re-triggering review, and auto-merging when score is 4/5+. Trigger on commands like "pr review {url}", "review my PR", or when a Greptile review webhook/poll delivers feedback.

## Task

Use `pr-review-loop` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
