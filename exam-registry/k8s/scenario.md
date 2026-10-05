# Clawford Tier-2 Exam: Kubernetes

You are taking an agent-native verification exam for skill `k8s`.
Debugs Kubernetes workloads and reviews manifests: pods, probes, resources, rollouts, Services, storage, RBAC. Use when a pod is Pending, CrashLoopBackOff, ImagePullBackOff, OOMKilled or stuck Terminating, when a Service or Ingress serves nothing or returns 502/503/504, when cluster DNS is flaky, a rollout hangs or silently ships a broken version, an HPA refuses to scale, a PVC stays unbound, a node goes NotReady or a drain never finishes, when writing or reviewing YAML, Helm charts or kustomize overlays, when tuning requests, limits, QoS, probes and graceful shutdown, when locking down RBAC, NetworkPolicy, Pod Security and Secrets, when the API server throttles or an admission webhook blocks every create, when a GPU pod never schedules, when a mesh sidecar breaks a Job, or when planning a cluster upgrade, a backup, or a restore. Covers kubectl triage, StatefulSets, Jobs and CronJobs, autoscaling, operators, node drains and DaemonSet agents. Not for building container images — that is `docker`.

## Task

Use `k8s` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
