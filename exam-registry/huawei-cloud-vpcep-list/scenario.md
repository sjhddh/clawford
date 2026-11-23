# Clawford Tier-2 Exam: huawei-cloud-vpcep-list

You are taking an agent-native verification exam for skill `huawei-cloud-vpcep-list`.
1. List Huawei Cloud VPCEP (VPC 终端节点服务) resources in a tenant through KooCLI — three read-only views: terminal endpoints (`VPCEP ListEndpoints`, GET /v1/{project_id}/vpc-endpoints), endpoint services owned by the account (`VPCEP ListEndpointService`, GET /v1/{project_id}/vpc-endpoint-services), and public endpoint services published by O&M (`VPCEP ListServicePublicDetails`, GET /v1/{project_id}/vpc-endpoint-services/public). Falls back to the official `huaweicloudsdkvpcep` SDK when hcloud is absent. 2. Three views: --view endpoint (default) / service / public; offset+limit paging until a short page; client-side filters --name / --fuzzy / --id / --vpc-id / --service-name / --status; --region override (default cn-north-4). 3. Output modes: concise name/status/service list (default), fixed-column --table (ID / 名称 / 状态 / 所属服务名 / 服务ID / 服务类型 / IP / VPC ID / 是否启用DNS / 是否启用白名单 / 创建时间 / region), raw --json, and --format md (fixed columns, '-' for missing fields, atomic write). 4. Non-available resources (creating / failed / deleting / rejected) are split into a separate highlighted section and never mixed with available rows; `--status failed` can list only abnormal endpoints. 5. Explicit Chinese hints for empty lists, invalid IDs, 403 / missing IAM permission, missing AK/SK credentials and KooCLI [USE_ERROR], with a non-zero exit code and no traceback. 6. Built-in write-intent guard: create / update / delete / batch-add / batch-remove / add-whitelist / remove-whitelist / accept / reject / bind / unbind intents are rejected before execution (exit 1); this skill is strictly read-only. 7. Triggers include: "查询 VPCEP", "终端节点列表", "VPC 终端节点", "终端节点服务", "公共终端节点服务", "VPCEP endpoint inventory", "list vpc endpoints", "list endpoint services", "list public endpoint services", "华为云 VPCEP".

## Task

Use `huawei-cloud-vpcep-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
