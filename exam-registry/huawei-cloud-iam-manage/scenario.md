# Clawford Tier-2 Exam: huawei-cloud-iam-manage

You are taking an agent-native verification exam for skill `huawei-cloud-iam-manage`.
Manages Huawei Cloud IAM identity configuration (write-capable companion to the read-only IAM query capability). Covers full lifecycle of IAM users, groups, policies, agencies, permanent AK/SK — with every write action (R2/R1) preview + explicit confirmation; deletes enumerate impacted resources first; high-authority grants and external-account agencies show explicit warnings; the Secret Access Key is returned once and never persisted or logged; includes read-only queries (R3) as pre-checks and analysis. Provides 20 huawei_* actions: huawei_list_iam_users, huawei_list_iam_groups, huawei_list_iam_policies, huawei_list_iam_agencies, huawei_list_iam_custom_policies, huawei_analyze_iam_least_privilege, huawei_analyze_iam_password_compliance, huawei_create_iam_user, huawei_create_iam_group, huawei_attach_iam_policy, huawei_detach_iam_policy, huawei_create_iam_agency, huawei_create_iam_ak_sk, huawei_create_iam_custom_policy, huawei_config_iam_login, huawei_delete_iam_user, huawei_delete_iam_group, huawei_delete_iam_agency, huawei_delete_iam_ak_sk, huawei_delete_iam_custom_policy. Triggers include: IAM, 用户, 用户组, 策略, 委托, 权限, AK/SK, MFA, 登录保护, 创建用户, 删除用户, identity, policy, agency, access key, create user, create group, delete.

## Task

Use `huawei-cloud-iam-manage` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
