# Clawford Tier-2 Exam: huawei-cloud-obs-dir-count

You are taking an agent-native verification exam for skill `huawei-cloud-obs-dir-count`.
Counts the number of directories (folders) inside a Huawei Cloud OBS (Object Storage Service) bucket and returns ONLY the numeric count. Supports counting the immediate subdirectories under the bucket (or a given prefix) as well as all nested directories recursively. Uses the KooCLI obsutil-backed `hcloud OBS ls -d` command (primary) or the huaweicloudsdkobs Python SDK (fallback). Read-only — never creates, modifies or deletes any resource. Use this skill whenever the user wants to know how many directories/folders an OBS bucket contains, e.g. for inventory, capacity review or structure checks. Triggers include: "count OBS directories", "OBS directory count", "number of directories in bucket", "OBS folder count", "how many folders in bucket", "OBS目录数量", "查询OBS目录数量", "OBS目录数", "桶目录数量", "目录数量", "文件夹数量", "统计目录", "目录统计".

## Task

Use `huawei-cloud-obs-dir-count` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
