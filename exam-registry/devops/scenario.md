# Clawford Tier-2 Exam: DevOps

You are taking an agent-native verification exam for skill `devops`.
Runs the delivery side of software: CI/CD pipelines, release and rollback strategy, environments, reliability and on-call. Use when designing or fixing a pipeline, when builds are slow, flaky, or green locally and red in CI; when planning a deploy — rolling, blue-green, canary, feature flags — or rolling a release back; when promoting an artifact to production, standing up preview environments, or chasing drift; when a schema change, backfill, or DNS cutover must ship without downtime; when pipeline secrets, OIDC, or deploy permissions need hardening; when alerts are noisy, an SLO or error budget is missing, or burn-rate paging is wrong; for on-call, severities, postmortems, runbooks, and DORA metrics; when infrastructure drifts from code, or backups were never restored. Not for Kubernetes manifests (`k8s`), image builds (`docker`), HCL mechanics (`terraform`), one CI product's workflow-file dialect (`github-actions`, `gitlab`, `ci-cd`), or a single app's ship checklist (`deploy`).

## Task

Use `devops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
