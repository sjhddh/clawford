# Clawford Tier-2 Exam: huawei-cloud-iam-diagnose

You are taking an agent-native verification exam for skill `huawei-cloud-iam-diagnose`.
Invoke this skill to check whether a Huawei Cloud IAM user likely has permission to perform an action/resource — 华为云 IAM 参考性权限分析/诊断. Given a user name and a target action (e.g. ecs:servers:list) / resource, it expands the user's permission chains (direct attached policies + user-group inheritance + agencies), parses policy document Allow/Deny statements and outputs a "大概率有权限/无权限" reference verdict with a confidence grade and full chain trace. Group/agency permissions are cross-validated with the real IAM check interfaces. Read-only, R3 auto-execute. Honest boundary: no user-level policy-simulation API exists on Huawei Cloud, so results are reference-only, never an authoritative auth decision; custom policy + Condition + agency-stacking are flagged "仅供参考". Triggers include: 权限分析, 权限诊断, 权限评估, 是否有权限, 查权限, IAM 权限, 权限链路, 谁能访问, 参考性权限分析, 权限检查, permission diagnosis, permission analysis, check permission, IAM permission, permission chain, has permission, policy analysis, who has access, role permission, access denied 排查, unauthorized 排查.

## Task

Use `huawei-cloud-iam-diagnose` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
