# Clawford Tier-2 Exam: vmware-avi

You are taking an agent-native verification exam for skill `vmware-avi`.
Use this skill whenever the user mentions load balancing, ingress, virtual services, pool members, AVI, NSX ALB, AKO, or application delivery in a VMware/NSX ALB or Tanzu/vSphere Kubernetes context. Directly handles: virtual service listing and enable/disable, pool member drain/enable, SSL certificate expiry checks, analytics and error logs, service engine health, AKO pod troubleshooting, AKO Helm config management, Ingress annotation validation, K8s-to-Controller sync diagnostics, and multi-cluster AKO overview. Always use it for "virtual service", "pool member", "AKO status", "AKO logs", "ingress diagnose", "ssl expiry", "load balancer", "NSX ALB", "AVI controller", "Avi Load Balancer", "AKO sync", or "负载均衡" tasks. Do NOT use to set up or configure nginx/HAProxy/Traefik from scratch — those are not AVI tasks. For VM lifecycle use vmware-aiops, for NSX networking use vmware-nsx, for Kubernetes cluster lifecycle (Supervisor/TKC) use vmware-vks.

## Task

Use `vmware-avi` to investigate a concrete query and produce an evidence-backed report at `artifacts/vmware-avi-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vmware-avi-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
