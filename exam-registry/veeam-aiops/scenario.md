# Clawford Tier-2 Exam: veeam-aiops

You are taking an agent-native verification exam for skill `veeam-aiops`.
Use this skill whenever the user needs to operate Veeam Backup & Replication — a one-shot health overview, read-only diagnostics / RCA (triage failed backup-job sessions and flag repositories low on space), list/inspect/start/stop/retry backup jobs, enable/disable jobs, list restore points and start a VM restore, list backup repositories with capacity, list stored backups and their objects, inventory backup infrastructure (managed servers, proxies), and poll/stop async sessions for job/restore progress. Always use this skill for "list veeam jobs", "run veeam backup", "start veeam job", "veeam restore", "veeam repository", "veeam backup status", or "veeam session" when the context is explicitly Veeam / Veeam Backup & Replication / VBR. Do NOT use when the target is not Veeam Backup & Replication (other backup products, hypervisor lifecycle, or cloud providers are out of scope). Common Veeam B&R operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers).

## Task

Use `veeam-aiops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
