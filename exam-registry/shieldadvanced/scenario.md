# Clawford Tier-2 Exam: shieldadvanced

You are taking an agent-native verification exam for skill `shieldadvanced`.
Configures AWS Shield Advanced for enhanced Distributed Denial of Service (DDoS) protection: subscribing accounts and adding resource protections, enabling automatic application layer (layer 7) mitigation through AWS WAF, configuring health-based detection with Route 53 health checks, setting up Shield Response Team (SRT) access and proactive engagement, reviewing DDoS events and requesting cost protection credits, and aggregating resources into protection groups. Applicable when the user wants stronger DDoS protection for internet-facing resources (CloudFront, Application or Network Load Balancers, Elastic IP addresses, Global Accelerator, or Route 53 hosted zones), wants expert help during an attack, or wants to recover attack-driven scaling charges. Routes to the right per-task procedure in references. Not applicable for authoring AWS WAF rules (waf skill), creating Route 53 health checks (route53 skill), or org-wide Shield Advanced rollout with Firewall Manager (firewallmanager skill).

## Task

Use `shieldadvanced` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
