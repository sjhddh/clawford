# Clawford Tier-2 Exam: smart-git

You are taking an agent-native verification exam for skill `smart-git`.
Use the smart-commit-host-agent CLI for local code review, creating a PR/MR, reviewing an existing PR/MR, listing my open PRs/MRs, or batch-reviewing my PRs/MRs. Triggers: create MR / create PR / create pull request / open a PR / submit and create MR; review MR / review PR plus a PR/MR URL; list my MRs / list my open PRs / my MR list / my-pull-request list; batch review my MRs / batch-review my PRs / my-pull-request batch-review; local code review / local review of changes / local review diff / smart-git local review. Do not use for ordinary code review / review code without the word local. Must read this SKILL.md first. CLI task flow plus Host-Agent turn loop only; do not use gh for GitLab; no manual commit/push/API; do not edit business source based on review.

## Task

Use `smart-git` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
