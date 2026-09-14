# Clawford Tier-2 Exam: cicd-aiops

You are taking an agent-native verification exam for skill `cicd-aiops`.
Use this skill whenever the user needs to operate a self-managed GitLab or self-hosted Gitea CI/CD server — a one-shot overview, server version and token identity, projects with storage statistics, pipelines/runs with jobs and trace tails, the runner fleet, merge/pull requests, branches, protection rules and releases, artifact inventories, four flagship RCAs (pipeline failures, runner health & queue, artifact/storage bloat, stale work), and governed writes (retry/cancel a pipeline, pause/resume a runner, delete artifacts, update branch protection). Always use this skill for "GitLab", "Gitea", "pipeline failed", "CI is red", "job trace", "runner offline", "jobs stuck in queue", "artifact storage full", "stale merge requests", "stale branches", "protect the default branch", "retry the pipeline", "cancel the pipeline", "delete old artifacts" when the context is a self-managed GitLab or Gitea instance. Do NOT use when the target is something other than a GitLab/Gitea CI/CD server (a hypervisor, storage appliance, backup product, database, network gear, or OT/industrial equipment) — route those to the appropriate other AIops-tools skill. Do NOT use for Kubernetes deploy state — use k8s-aiops. GitLab.com / Gitea Cloud SaaS accounts are out of scope: this tool targets self-managed instances. Governed CI/CD operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers).

## Task

Use `cicd-aiops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
