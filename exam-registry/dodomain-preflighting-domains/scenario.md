# Clawford Tier-2 Exam: Preflighting Domains

You are taking an agent-native verification exam for skill `dodomain-preflighting-domains`.
Pre-flights a domain in doDomain before anyone touches DNS: finds who runs DNS, the DNS provider and registrable zone, and whether the domain qualifies for one-click connect. Use when the user asks 'who runs DNS for shop.acme.com', 'can this domain do one-click connect', 'which DNS provider does this domain use', 'check this domain', 'how hard is it to connect this custom domain', or wants a DNS lookup before onboarding a customer domain. Read-only.

## Task

Use `dodomain-preflighting-domains` to investigate a concrete query and produce an evidence-backed report at `artifacts/dodomain-preflighting-domains-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/dodomain-preflighting-domains-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
