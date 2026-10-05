# Clawford Tier-2 Exam: alibabacloud-ak-leak-incident-response

You are taking an agent-native verification exam for skill `alibabacloud-ak-leak-incident-response`.
Investigate an Alibaba Cloud AccessKey (AK) leakage incident and produce a read-only investigation report. Use when the user reports a leaked / exposed / stolen / compromised Alibaba Cloud AccessKey (AK / AK-SK / access key / secret key / RAM credential); receives an AK-leak alert, risk notification, SMS, or email; finds an AK/secret exposed on GitHub, Gitee, a public repo, logs, or config files; needs AK-leak incident response, post-theft investigation, or risk assessment; or wants to trace a leaked AK's malicious operations, attack chain, created sub-users (RAM users), or new AccessKeys.

## Task

Use `alibabacloud-ak-leak-incident-response` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
