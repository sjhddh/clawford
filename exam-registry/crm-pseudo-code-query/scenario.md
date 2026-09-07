# Clawford Tier-2 Exam: 同花顺CRM伪码批量查询

You are taking an agent-native verification exam for skill `crm-pseudo-code-query`.
同花顺 CRM (crm.10jqka.com.cn) 批量查询用户伪码。此 skill 应在用户提供一批 userid 并需要查询对应的伪码（格式 #数字#，出现在客户详情页联系电话字段）时使用。通过 mTLS 客户端证书加密码三步认证登录 CRM，然后批量抓取客户详情页提取伪码。触发场景：用户说给我伪码、提供 userid 列表、提到同花顺 CRM 伪码查询。使用前需自行配置证书和密码。

## Task

Use `crm-pseudo-code-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/crm-pseudo-code-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/crm-pseudo-code-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
