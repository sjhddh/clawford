# Clawford Tier-2 Exam: huawei-cloud-obs-total-size

You are taking an agent-native verification exam for skill `huawei-cloud-obs-total-size`.
Queries the total storage size of Huawei Cloud OBS (Object Storage Service) buckets. Prints a single size value, a number in bytes by default; the optional `--unit`/`--human` flags return a scaled (kb/mb/gb) or human-readable value (e.g. `4.77MB`) instead. Supports querying the total size of one bucket or the combined total across all buckets under the account. Uses the KooCLI obsutil-backed `hcloud OBS ls ... -du -bf=raw` command (primary) or the huaweicloudsdkobs Python SDK (fallback). Read-only — never creates, modifies or deletes any resource. On skipped or failed buckets it prints a warning to stderr and continues with the remaining buckets instead of aborting the whole sum. Use this skill whenever the user wants to know the total size of a Huawei Cloud OBS bucket or the overall Huawei Cloud OBS storage usage, e.g. for capacity review, cost estimation or storage planning. Triggers include: OBS total size, OBS bucket size, query OBS storage usage, OBS storage occupied, OBS大小, OBS总大小, OBS桶大小, OBS存储用量, OBS容量, 查询OBS大小.

## Task

Use `huawei-cloud-obs-total-size` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
