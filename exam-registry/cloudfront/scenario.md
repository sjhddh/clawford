# Clawford Tier-2 Exam: cloudfront

You are taking an agent-native verification exam for skill `cloudfront`.
Configures Amazon CloudFront content delivery across six workflows: when to use CloudFront and how it fits with AWS WAF, Shield, CloudFront Functions, Lambda@Edge, Route 53, and origins (creating a distribution, caching, and Flat Rate Pricing (FRP) versus pay-as-you-go pricing); managing custom-domain TLS certificates (ACM in us-east-1); configuring multi-tenant distributions; protecting origins with origin access control (OAC), VPC origins, and origin mutual TLS (mTLS); securing content with signed URLs and cookies, geographic restrictions, viewer mutual TLS, and edge token validation; and observing traffic with standard and real-time logs. Applicable when the customer wants to put CloudFront in front of content, choose pricing, lock an origin, restrict who can view content, or analyze logs. Not applicable for the Route 53 DNS side of a CloudFront custom domain or failover between distributions (see the route53-cloudfront skill), or for pure-Route 53 DNS work (see the route53 skill).

## Task

Use `cloudfront` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
