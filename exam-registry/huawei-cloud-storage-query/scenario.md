# Clawford Tier-2 Exam: huawei-cloud-storage-query

You are taking an agent-native verification exam for skill `huawei-cloud-storage-query`.
Queries Huawei Cloud storage resources (EVS/OBS/SFS/CBR). Covers cloud disks (volumes/snapshots/types/quotas/recycle bin), OBS buckets (ACL/metadata/notifications/policies/objects), SFS Turbo file systems (shares/perm rules/backend targets/quotas/LDAP/AD), and CBR backups (vaults/policies/backups/tasks/agents/protectables). No write operations. Use this skill when the user needs to query disk info, list buckets/objects, check file system status, or view backup/policy details. Triggers: 云硬盘, EVS, 对象存储, OBS, 文件系统, SFS, 备份, CBR, 存储库, 快照, 桶, volume, bucket, backup, vault.

## Task

Use `huawei-cloud-storage-query` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
