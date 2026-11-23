# Clawford Tier-2 Exam: huawei-cloud-ecs-show

You are taking an agent-native verification exam for skill `huawei-cloud-ecs-show`.
1. Show the full detail of one Huawei Cloud ECS (Elastic Cloud Server) instance by its instance ID through KooCLI (hcloud ECS ShowServer — read-only GET /v1/{project_id}/cloudservers/{server_id}), with an automatic fallback to the official huaweicloudsdkecs v2 SDK when hcloud is not installed. 2. Input: a single --instance-id (required); region override (--region, default cn-north-4) and an optional --project-id (SDK fallback path). 3. Output modes: key/detail block (default) covering ID / 名称 / 状态 / 规格(flavor) / 镜像 / 私网+公网 IP / 可用区 / 创建时间 / 标签, --json (raw server object) on stdout, and --md-file <path> to export the same key fields as a Markdown document to a local file. Without --md-file all output goes to stdout only — the script writes no file. 4. Explicit error hints for a missing / malformed instance ID (「实例 ID 不能 为空」), a non-existent ID (「未找到该 ECS 实例」, 404), 403 / insufficient IAM permission (「无权限访问 ECS，请检查 IAM 权限」), and missing or invalid AK/SK credentials. 5. Built-in write-intent guard: any mutating intent (create / delete / update / rebuild / resize / reboot / start / stop / attach / detach) or any operation other than ShowServer is rejected before execution — this skill is strictly read-only. 6. Triggers include: "show ECS instance", "ECS instance detail", "query ECS by id", "ECS 实例详情", "根据ID查询ECS", "查询云服务器详情", "ECS 详情", "查看ECS实例", "云服务器详情", "华为云 ECS 详情". 7. Offline unit tests (mocked hcloud subprocess) cover detail / JSON output, Markdown export, error scenarios, SDK fallback, the write-intent guard, and instance-ID validation.

## Task

Use `huawei-cloud-ecs-show` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
