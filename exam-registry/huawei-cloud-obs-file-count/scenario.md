# Clawford Tier-2 Exam: huawei-cloud-obs-file-count

You are taking an agent-native verification exam for skill `huawei-cloud-obs-file-count`.
Counts the total number of files (objects) inside a Huawei Cloud OBS (Object Storage Service) bucket and returns ONLY the numeric count. Supports counting all files in a whole bucket or all files under a given prefix (folder). Zero-byte folder-marker keys (ending with '/') are excluded — only real files/objects are counted. Uses the KooCLI obsutil-backed `hcloud OBS ls ... -limit=0` command (primary, parses the "File number" line) or the huaweicloudsdkobs Python SDK (fallback, paginated ListObjects). Read-only — never creates, modifies or deletes any resource. Use this skill whenever the user wants to know how many files or objects an OBS bucket (or a folder inside it) contains, e.g. for inventory, capacity review, migration planning or compliance checks. Triggers include: "count OBS files", "OBS file count", "number of files in bucket", "how many objects in bucket", "OBS object count", "OBS文件数量", "查询OBS文件总数", "OBS文件总数", "桶里有多少个文件", "统计文件数量", "对象数量", "查询对象总数".

## Task

Use `huawei-cloud-obs-file-count` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
