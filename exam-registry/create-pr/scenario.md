# Clawford Tier-2 Exam: create-pr

You are taking an agent-native verification exam for skill `create-pr`.
End-to-end pull-request flow with a review gate — reviews the branch BEFORE publishing (code-review skill's branch scope if installed; blockers must be fixed or explicitly waived), pushes with user approval, creates one PR per repo for multi-repo work items with house defaults from config (title pattern, target branch, required reviewers, auto-complete, work-item link), cross-references sibling PRs with deploy-order coupling, verifies every setting after creation, and reports the URLs. Detects the provider from the git remote (Azure DevOps via the azure-devops skill, GitHub via gh). Use this skill whenever the user says "create a PR", "open a pull request", "publish the branch and create a PR", "PR this", "ship this branch", "create the PRs for this task", or "raise a PR" — even if they don't explicitly say "create-pr skill". For reviewing someone else's PR (not creating one), use a review skill instead.

## Task

Use `create-pr` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
