# Clawford Tier-2 Exam: huawei-cloud-kms-key-list

You are taking an agent-native verification exam for skill `huawei-cloud-kms-key-list`.
1. Query the Huawei Cloud KMS (Data Encryption Workshop / 数据加密服务) master keys (CMK) of the current account in one region, strictly read-only. Primary path: KooCLI `hcloud KMS ListKeys` (read-only POST /v1.0/{project_id}/kms/list-keys); when hcloud is unavailable or fails, fall back to the official `huaweicloudsdk` KMS SDK (huaweicloudsdkkms). 2. Output modes: a compact list of 别名 | 密钥ID | 状态 (default), a full 8-column table with --table (密钥ID / 别名 / 状态 / 密钥用途 / 密钥类型 / 轮转周期 / 创建时间 / region), and --json for the raw merged response body. 3. Filters: --alias (exact match, --fuzzy for substring), --key-id, --state (client-side; 1-5 or enabled/disabled/pending-deletion/pending-import/ pending-activation), --region (default cn-north-4). 4. Pagination: --limit 1-200 with automatic paging driven by the response fields truncated / next_marker / total. 5. Built-in read-only guard: any mutating intent (create / enable / disable / schedule-deletion / cancel-deletion / rotate / create-grant / delete / update ...) is rejected before execution with exit code 1 — this skill never writes to KMS. 6. Explicit error hints for an empty key list, 403 / insufficient IAM permission, missing credentials, missing hcloud, and KooCLI [USE_ERROR]. 7. Triggers include: "list KMS keys", "KMS 密钥列表", "查询KMS密钥", "密钥盘点", "CMK 列表", "密钥轮转状态", "KMS 巡检", "kms key inventory", "list cmk", "华为云KMS密钥". 8. Offline unit tests cover routing, pagination, output modes, filters, error classification and the write-intent guard (mock hcloud subprocess + fake SDK client).

## Task

Use `huawei-cloud-kms-key-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
