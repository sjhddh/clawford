# Clawford Tier-2 Exam: alibabacloud-sas-vul-repair

You are taking an agent-native verification exam for skill `alibabacloud-sas-vul-repair`.
Alicloud Service Scenario-Based Skill. Use for the vulnerability module of Alibaba Cloud Security Center (SAS): querying and filtering vulnerabilities (by severity/type/asset/status), triggering vulnerability repair and post-fix re-verification, interpreting repair failure error codes (8009, 8037, 9003, etc.) with repository and network troubleshooting, handling "fixed but still detected" status refresh, and manual repair guidance for non-standard systems (self-compiled kernels, non-Alibaba-Cloud hosts, offline environments, custom images, EOL systems). Triggers: "Security Center vulnerability", "vulnerability repair", "vulnerability fix", "fix failed", "repair failed", "vulnerability error code", "fixed but still detected", "re-verify vulnerability", "unfixed vulnerability list", "self-compiled kernel", "manual vulnerability fix", "CVE", "漏洞修复", "修复失败", "漏洞错误码", "已修复仍检出", "重新验证漏洞", "漏洞复检", "未修复漏洞清单", "yum 源超时", "自编译内核", "手动修复漏洞".

## Task

Use `alibabacloud-sas-vul-repair` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-sas-vul-repair-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-sas-vul-repair-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
