# Clawford Tier-2 Exam: container-host-aiops

You are taking an agent-native verification exam for skill `container-host-aiops`.
Use this skill whenever the user needs to operate a single container host through the Docker Engine API, Portainer, or Podman — a one-shot host overview; container reads (list/inspect, logs tail, CPU/memory stats, top processes, restart summary); image reads (list, inspect with history, dangling, disk usage); volume reads (list, inspect, dangling); network reads (list, inspect); system reads (info, version, df disk-usage, recent events); Portainer stacks + endpoints; Compose-project rollups (list_compose_stacks, docker+podman); Podman pods (list_pods, podman-only); three flagship analyses — restart-loop RCA (crash-looping containers + cause/action), resource-pressure analysis (CPU/memory vs limits), and image & volume bloat (prune candidates + reclaimable bytes); and eight guarded writes (restart/stop/start/remove a container, prune images/volumes, update resource limits, recreate a Portainer stack). Always use this skill for "Docker host overview", "which containers are crash-looping", "restart loop", "why does this container keep restarting", "container CPU/memory usage", "docker logs", "which containers are near their limits", "resource pressure", "dangling images/volumes", "reclaim disk", "prune images", "stop/start/restart a container", "update a container's memory limit", "Portainer stacks", "compose stacks", "Podman pods" when the context is a Docker, Portainer, or Podman container host. Do NOT use when the target is a cluster orchestrator, a hypervisor, a storage appliance, a backup product, network device config, or OT/industrial equipment — route those to the appropriate other AIops-tools skill. This is for NON-orchestrator container hosts. Governed Docker/Portainer/Podman container-host operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers). Exercised against a live Docker Engine 27.5.1 daemon (doctor, overview, the three flagship analyses, and a governed stop_container with audit + undo recorded); the Portainer and Podman API paths are covered by the mock suite only. See docs/VERIFICATION.md.

## Task

Use `container-host-aiops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
