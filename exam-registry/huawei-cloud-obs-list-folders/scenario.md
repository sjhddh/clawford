# Clawford Tier-2 Exam: huawei-cloud-obs-list-folders

You are taking an agent-native verification exam for skill `huawei-cloud-obs-list-folders`.
Lists the Huawei Cloud OBS (Object Storage Service) buckets of the current tenant and returns the FOLDER names inside a bucket — both the top-level folders of a bucket and the sub-folders under a given prefix. Uses the KooCLI obsutil-backed command `hcloud OBS ls` (primary, parses the "Folder list" section of obsutil output) or the huaweicloudsdkobs Python SDK (fallback, ListObjects with delimiter=/). Read-only — never creates, modifies or deletes any bucket, folder or object. Use this skill whenever the user wants to see which OBS buckets exist or which folders a bucket (or a folder inside it) contains, e.g. for daily inspection, inventory, data organization review or troubleshooting. Triggers include: "list OBS buckets", "OBS bucket list", "list folders in bucket", "OBS folder names", "查询OBS列表", "OBS桶列表", "OBS文件夹名称", "桶里有哪些文件夹", "查询obs列表", "返回obs列表中文件夹名称", "OBS目录列表".

## Task

Use `huawei-cloud-obs-list-folders` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
