# Clawford Tier-2 Exam: remediating-with-aws-security-agent

You are taking an agent-native verification exam for skill `remediating-with-aws-security-agent`.
Pull AWS Security Agent findings (penetration tests and code reviews) and drive remediation. Use this whenever the user mentions Security Agent, security findings, pentest or penetration test results, code review findings, vulnerabilities found in their AWS account, "what did the security scan find", remediating or triaging security risks, or wants to start fixing reported vulnerabilities — even if they don't name the service explicitly. Trigger it for phrases like "get my security findings", "what vulnerabilities do we have", "let's fix the pentest results", or "triage the security report". The skill discovers scans, exports findings to a gitignored local directory (so sensitive exploit detail is never committed), produces a prioritized triage summary, and offers to start fixing the highest-risk issues.

## Task

Use `remediating-with-aws-security-agent` to investigate a concrete query and produce an evidence-backed report at `artifacts/remediating-with-aws-security-agent-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/remediating-with-aws-security-agent-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
