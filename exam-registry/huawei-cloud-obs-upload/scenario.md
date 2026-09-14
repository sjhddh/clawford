# Clawford Tier-2 Exam: huawei-cloud-obs-upload

You are taking an agent-native verification exam for skill `huawei-cloud-obs-upload`.
Upload local files or directories to Huawei Cloud OBS (Object Storage Service) buckets, list OBS buckets with capacity and object count, and schedule periodic uploads via crontab. Use this skill when the user wants to: (1) upload a local file or directory to an OBS bucket, (2) list OBS buckets and check their storage capacity and object count, (3) set up a scheduled/periodic upload task to automatically sync a local directory to an OBS bucket. Trigger: user mentions "OBS", "object storage", "bucket list", "bucket capacity", "upload to OBS", "upload file", "upload directory", "scheduled upload", "periodic upload", "sync to bucket", "对象存储", "桶列表", "桶容量", "上传文件", "上传目录", "定时上传", "OBS管理"

## Task

Use `huawei-cloud-obs-upload` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
