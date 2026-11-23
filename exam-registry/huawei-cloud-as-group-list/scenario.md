# Clawford Tier-2 Exam: huawei-cloud-as-group-list

You are taking an agent-native verification exam for skill `huawei-cloud-as-group-list`.
1. Read-only inventory of Huawei Cloud Auto Scaling (AS / 弹性伸缩) resources in one region: scaling group name / ID / status, desired vs current instance number, min-max instance number, associated VPC / subnet / ELB, and the instance members inside a scaling group. Aimed at troubleshooting "scale-out did not take effect", "instance counts do not match", and "scaling group stuck in an abnormal state". 2. Primary path: KooCLI call `AS ListScalingGroups` (read-only GET /autoscaling-api/v1/{project_id}/scaling_group) with `ListScalingInstances` (GET /autoscaling-api/v1/{project_id}/scaling_group_instance/ {scaling_group_id}/list) for drill-down; automatic fallback to the official huaweicloudsdkas v1 SDK when hcloud is unavailable. 3. Output modes: compact list (name / ID / status) by default, `--table` group view (11 columns) or, with `--group-id`, instance view (6 columns), and `--json` for the raw merged response. 4. Abnormal groups (desired != current or status != INSERVICE) and abnormal instances (life-cycle != INSERVICE or health != NORMAL) are placed in a separate highlighted section at the top of `--table` output; `--status abnormal` lists only abnormal resources. 5. Client-side filters: `--name` (exact, `--fuzzy` for substring), `--group-id`, `--status` (supports the abnormal alias), `--region` (default cn-north-4). `--limit` is 1-100 with automatic paging driven by total_number and the accumulated item count. 6. Built-in write-intent guard: create / update / delete / enable / disable / batch-add / batch-remove / policy-execute / ... are rejected before any cloud call with exit code 1 — this skill never writes to AS. 7. Explicit error hints for empty lists, 403 / insufficient IAM permission, missing credentials, missing hcloud, KooCLI [USE_ERROR], and a non-existent scaling group. 8. Triggers include: "list AS scaling groups", "AS 伸缩组列表", "查询伸缩组", "弹性伸缩组", "伸缩组实例", "期望实例数与当前实例数不一致", "扩容没生效", "auto scaling inventory", "scaling group troubleshooting", "华为云弹性伸缩".

## Task

Use `huawei-cloud-as-group-list` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
