# Clawford Tier-2 Exam: huawei-cloud-vbs-list

You are taking an agent-native verification exam for skill `huawei-cloud-vbs-list`.
Query the current Huawei Cloud backup (VBS/Volume Backup Service) list. Lists all backups in the user's project, with optional filtering by status, name, resource type, vault, and time range. The legacy VBS service has been superseded by CBR (Cloud Backup and Recovery), so this skill queries backups through the CBR ListBackups API/CLI. Use when the user wants to: (1) list all backups / VBS backup list, (2) check backup status and details, (3) filter backups by name, status, resource type, vault, or time range, (4) inspect backup inventory for daily inspection or troubleshooting. Triggers include: "VBS", "备份列表", "备份", "云硬盘备份", "backup list", "list backups", "备份状态", "CBR", "Cloud Backup", "vbs list"

## Task

Use `huawei-cloud-vbs-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
