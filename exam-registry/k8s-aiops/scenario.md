# Clawford Tier-2 Exam: k8s-aiops

You are taking an agent-native verification exam for skill `k8s-aiops`.
Use this skill whenever the user needs to operate a Kubernetes cluster — list/inspect pods, deployments, statefulsets, daemonsets, replicasets, jobs, cronjobs, services, ingresses, endpoints, configmaps, secrets (names/keys only), PVCs/PVs/storageclasses, nodes, namespaces, and events; read pod logs; describe pods/nodes; pod/node top (metrics); read-only diagnostics / RCA (pod-health, workload-readiness); scale deployments/statefulsets; rollout status/history/undo/pause/resume and set image; delete pods/deployments/jobs; create/delete namespaces; and cordon/uncordon/drain nodes. Works with any kubeconfig-reachable cluster (standard Kubernetes, k3s, EKS, GKE, AKS). Always use this skill for "list k8s pods", "scale deployment", "kubernetes pod logs", "describe pod", "why is my pod crashing", "diagnose pods", "which deployments are unhealthy", "rollout undo", "set image", "top pods", "drain node", "cordon node", "restart deployment", "k3s", or "kubectl"-style tasks when the context is explicitly Kubernetes / a cluster. Do NOT use when the target is not a Kubernetes cluster (hypervisor VM lifecycle, backup products, or cloud-provider consoles are out of scope). Common Kubernetes operations with a built-in governance harness (audit, token budget, undo, risk-tier labels).

## Task

Use `k8s-aiops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
