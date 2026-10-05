# Clawford Tier-2 Exam: azure-devops

You are taking an agent-native verification exam for skill `azure-devops`.
Work with an Azure DevOps org via the az CLI — query sprint/assigned work items with WIQL, read a work item's description AND download+view its embedded screenshots, publish branches, and create PRs with configured house defaults (required reviewers, auto-complete, work item linked, one PR per repo). Reads org/project/reviewer settings from `.claude/azure-devops.json` and offers to create it on first use. Use this skill whenever the user says "pull my tasks", "my sprint work items", "what's assigned to me", "read task 12345", "read the work item", "get the screenshots from the work item", "link the PR to the work item", "set auto-complete", or mentions "azure devops", "az boards", "az repos" — even if they don't explicitly say "azure-devops skill". For "create a PR" defer to the create-pr skill (this skill is its Azure DevOps backend and supplies the PR mechanics). Do not use for GitHub repos (use gh) or for local git-only operations.

## Task

Use `azure-devops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
