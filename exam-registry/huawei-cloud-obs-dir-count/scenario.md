# Clawford Tier-2 Exam: huawei-cloud-obs-dir-count

You are taking an agent-native verification exam for skill `huawei-cloud-obs-dir-count`.
Count the number of directories (folders) in a Huawei Cloud OBS (Object Storage Service) bucket or under a bucket prefix, returning the count as an integer. Read-only: never creates, modifies, deletes, or uploads any bucket or object. Uses the `hcloud OBS ls -d` command (obsutil) with strict input validation. Triggers include: "count OBS directories", "how many folders are in the OBS bucket <bucket>", "number of directories under <prefix> in OBS bucket <bucket>", "统计OBS目录数量", "查询OBS目录数量", "数一下OBS桶里的文件夹数量", "count folders in an OBS bucket".

## Task

Use `huawei-cloud-obs-dir-count` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
