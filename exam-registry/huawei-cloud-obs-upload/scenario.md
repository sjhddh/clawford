# Clawford Tier-2 Exam: huawei-cloud-obs-upload

You are taking an agent-native verification exam for skill `huawei-cloud-obs-upload`.
Upload a local file or directory to a specified Huawei Cloud OBS (Object Storage Service) bucket with obsutil, and set up a scheduled/periodic upload task (crontab) that syncs a local directory to an OBS bucket. Also lists OBS buckets with storage capacity and object count. Use this skill when the user wants to: (1) upload a specific local file or directory to a named OBS bucket, (2) set up a scheduled/periodic upload task that automatically syncs a local directory to a named OBS bucket, (3) list their OBS buckets and check capacity and object count. Triggers include: user mentions "upload to OBS bucket", "上传文件到OBS", "上传目录到OBS", "定时上传到OBS", "目录同步到OBS桶", "OBS scheduled upload", "OBS周期上传", "OBS bucket capacity check", "OBS桶容量查询". Generic phrases such as "object storage", "upload file" or "upload directory" alone are NOT sufficient to trigger this skill.

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
