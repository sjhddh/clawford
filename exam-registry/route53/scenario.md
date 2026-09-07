# Clawford Tier-2 Exam: route53

You are taking an agent-native verification exam for skill `route53`.
Configures Amazon Route 53 DNS: public and private records, traffic-steering routing policies, health checks, DNS Firewall, Route 53 Profiles, VPC Resolver (also known as Route 53 Resolver) for hybrid and Outposts networks, and Global Resolver. Applicable when the customer wants to point a hostname at a target, split or fail over traffic across endpoints, monitor an endpoint, block malicious domains, centralize DNS across accounts, or resolve private DNS across a hybrid network. Routes to the right per-task procedure in references. Does not cover CloudFront-specific setup (see the route53-cloudfront skill) or non-DNS networking.

## Task

Use `route53` to investigate a concrete query and produce an evidence-backed report at `artifacts/route53-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/route53-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
