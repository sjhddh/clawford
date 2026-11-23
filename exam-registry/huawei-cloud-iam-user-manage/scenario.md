# Clawford Tier-2 Exam: huawei-cloud-iam-user-manage

You are taking an agent-native verification exam for skill `huawei-cloud-iam-user-manage`.
1. Creates Huawei Cloud IAM users and authorizes them through the IAM v5 OpenAPI: create a user (name / description / enabled), create or reuse a user group, add the user to the group, and attach identity policies. 2. Execution order: KooCLI (`hcloud IAM <Operation>`) first, then the official `huaweicloudsdkiam` v5 Python SDK as a transparent fallback. Read-only lookups (list users / groups / policies) support name-to-id resolution. 3. Idempotent by design: an existing user/group is reused and an already-existing membership or attachment is reported instead of failing. 4. Explicitly OUT OF SCOPE: deleting or disabling users, deleting groups, AK/SK rotation, password policy, MFA, agencies/delegation. 5. Triggers include: "创建IAM用户", "IAM用户授权", "给用户授权", "关联用户组", "绑定权限策略", "IAM user create", "create IAM user", "authorize IAM user", "add user to group", "attach policy to user", "iam user manage".

## Task

Use `huawei-cloud-iam-user-manage` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
