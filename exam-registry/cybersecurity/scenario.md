# Clawford Tier-2 Exam: Cybersecurity

You are taking an agent-native verification exam for skill `cybersecurity`.
Runs defensive security: alert triage, compromise investigation, attack paths, vulnerability prioritization, detection, and risk reporting. Use when an alert, a suspicious login, a reported email, encrypted files, or a possible compromise needs scoping and containment; when deciding what to patch first out of a scanner or pentest backlog; when hardening identity, endpoints, segmentation, cloud tenants, or a build pipeline; when writing or tuning detections nobody trusts; when a vendor questionnaire, SOC 2, ISO 27001, PCI, HIPAA, GDPR or NIS2 evidence is due; when a notification clock may already be running; when scoping an authorized test or a disclosure; or when a finding has to be written so an engineer, an executive or a board decides. Covers evidence handling, token eviction, and building a security program from nothing. Not for line-by-line secure code fixes (`security-best-practices`), STRIDE notation depth (`threat-modeling`), or implementing login flows (`auth`).

## Task

Use `cybersecurity` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
