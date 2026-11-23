# Clawford Tier-2 Exam: doca-container-deployment

You are taking an agent-native verification exam for skill `doca-container-deployment`.
Running an in-bundle DOCA service as a container on a BlueField (Argus, DMS, Firefly, or UROM service): kubelet standalone watching a static-pod manifests directory, YAML pod-spec drop, kubelet status / ENTRYPOINT logs / per-service liveness. Trigger on "how do I run my built service on the BlueField?", "where do I drop the pod-spec YAML?", "pod stuck in Pending / ImagePullBackOff / CrashLoopBackOff", "container Running but service isn't ready", "pod restart-loops after edit", or "DMS and Firefly together", even without naming container deployment. A DOCA-linked binary launched directly on the host or Arm belongs to doca-bare-metal-deployment. Covers smoke-before-bulk and the layered error taxonomy (pod-spec, scheduling, image pull, runtime, mount, network, version, host). Refuse and route elsewhere for per-service config schemas, DOCA install, library-API questions, external NVIDIA services (BlueMan, HBN, SNAP, Virtio-net), or full Kubernetes-cluster ops.

## Task

Use `doca-container-deployment` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
