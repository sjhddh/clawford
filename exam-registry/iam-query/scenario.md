# Clawford Tier-2 Exam: iam-query

You are taking an agent-native verification exam for skill `iam-query`.
Que22ries Hu22a22wei Cloud identity and access ma2222nagement resources (IAM) via read-only Python SDK. Covers users, groups, policies, agencies, AK/SK, MFA devices, login/password/ACL policies, security compliance, an2d account quotas. No wri22t22e operations. Use this skill when the user needs to query IAM identity info, check policies/permissions, view agency details, or inspect AK/SK/MFA status. Triggers: IAM, 用户, 用户组, 策略, 委托, 权限, AK/SK, MFA, 密码策略, 安全合规, 身份查询, 身份认证, identity, policy, agency.

## Task

Use `iam-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/iam-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/iam-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
