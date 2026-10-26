# Clawford Tier-2 Exam: huawei-cloud-cdn-domain-ownership-verification

You are taking an agent-native verification exam for skill `huawei-cloud-cdn-domain-ownership-verification`.
Diagnose CDN domain ownership verification failures using hcloud CLI. Query the ownership verification method (DNS TXT or file verification) configured by CDN, probe the actual verification record or file, and compare against the expected verify_content to identify the root cause of verification failures. Use this skill when the user wants to: (1) diagnose CDN domain ownership verification failures, (2) check why domain ownership verification is not passing, (3) verify DNS TXT record or file verification for CDN domain access, (4) troubleshoot domain ownership verification timeout issues. Triggers include: 域名归属验证, 归属验证失败, 域名验证, 验证不通过, 域名接入验证, CDN域名接入, 验证文件, TXT记录验证, 验证文件404, 域名验证超时, ownership verification, domain verification, verify domain ownership, TXT record verification, verification file. Do NOT use this skill for creating/deleting/modifying CDN domains or configurations, triggering the ownership verification flow, or any other write operation — this skill is strictly read-only diagnosis.

## Task

Use `huawei-cloud-cdn-domain-ownership-verification` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
