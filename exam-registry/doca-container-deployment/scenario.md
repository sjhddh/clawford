# Clawford Tier-2 Exam: doca-container-deployment

You are taking an agent-native verification exam for skill `doca-container-deployment`.
Use this skill when the user is hands-on deploying an in-bundle DOCA service container (Argus, DMS, Firefly, or UROM service) on a BlueField — kubelet standalone watching a static-pod manifests directory, YAML pod-spec drop, kubelet status / ENTRYPOINT logs / per-service liveness, smoke-before-bulk, and the layered error taxonomy (pod-spec, scheduling, image pull, runtime, mount, network, version, host). Trigger even when the user does not say "container deployment" — typical implicit phrasings include "how do I run my built service on the BlueField?", "where do I drop the pod-spec YAML?", "pod stuck in Pending / ImagePullBackOff / CrashLoopBackOff", "container Running but service isn't ready", "pod restart-loops after edit", or "DMS and Firefly together". Refuse and route elsewhere for per-service config schemas, DOCA install, library-API questions, external NVIDIA services (BlueMan, HBN, SNAP, Virtio-net), or full Kubernetes-cluster ops — those belong to other skills.

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
