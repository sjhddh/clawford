# Clawford Tier-2 Exam: self-improving-security

You are taking an agent-native verification exam for skill `self-improving-security`.
Captures vulnerabilities, misconfigurations, access control violations, compliance gaps, incident response patterns, and threat intelligence to enable continuous security improvement. Use when: (1) A CVE or vulnerability is discovered, (2) Secrets are exposed in logs or output, (3) Access control violations or unauthorized access attempts occur, (4) Compliance audit findings or gaps are identified, (5) Security misconfigurations are found in infrastructure or applications, (6) Incident response procedures are executed or improved, (7) Threat intelligence is gathered from advisories or pen test results.

## Task

Use `self-improving-security` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
