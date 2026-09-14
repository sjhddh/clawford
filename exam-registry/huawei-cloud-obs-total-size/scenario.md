# Clawford Tier-2 Exam: huawei-cloud-obs-total-size

You are taking an agent-native verification exam for skill `huawei-cloud-obs-total-size`.
Queries the total storage size of Huawei Cloud OBS (Object Storage Service) buckets and returns ONLY the size value — a single number, in bytes by default. Supports querying the total size of one bucket or the combined total across all buckets under the account. Uses the KooCLI obsutil-backed `hcloud OBS ls ... -du -bf=raw` command (primary) or the huaweicloudsdkobs Python SDK (fallback). Read-only — never creates, modifies or deletes any resource. Use this skill whenever the user wants to know the total size of an OBS bucket or the overall OBS storage usage, e.g. for capacity review, cost estimation or storage planning. Triggers include: OBS total size, OBS bucket size, total storage usage, bucket capacity, OBS大小, OBS总大小, OBS容量, 桶大小, 查询OBS大小, 存储占用, OBS存储量.

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
