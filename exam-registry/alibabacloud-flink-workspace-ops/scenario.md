# Clawford Tier-2 Exam: alibabacloud-flink-workspace-ops

You are taking an agent-native verification exam for skill `alibabacloud-flink-workspace-ops`.
Use when user explicitly asks Flink/Ververica/Realtime Compute Console workspace operations: 草稿(draft), SQL校验/执行, 部署(deployment), 作业(job), Session Cluster, namespace, 表(table), 成员(member), 变量(variable), 或 checkpoint timeout 诊断, especially with workspace/deployment/job IDs (w-*, d-*, j-*, sc-*, draft-*). Also use when prompt asks to test/verify Flink Console lifecycle flow, safety guardrails, or parameter validation for these operations. This includes prompts such as create draft, deploy draft, list deployments, start/stop job, create/list session cluster, get tables, list variables. Also use when prompt explicitly asks to run `python scripts/flink_ververica_ops.py` for Flink Console workspace operations. Do not trigger for unrelated "workspace" contexts or generic cloud/platform tasks (ECS, OSS, RDS, Kafka, Spark, Kubernetes, billing, weather). Do not trigger for Flink instance lifecycle operations (create/scale/delete/renew); those belong to alibabacloud-flink-instance-manage.

## Task

Use `alibabacloud-flink-workspace-ops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
