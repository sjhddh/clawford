# Clawford Tier-2 Exam: vmware-privateai

You are taking an agent-native verification exam for skill `vmware-privateai`.
Use for VMware Private AI Foundation with NVIDIA on vSphere 9.x/VCF 9.1: GPU inventory/readiness/utilization, vGPU consumers and profiles, DirectPath catalog, vGPU assignment, and PAIS served models, knowledge bases, catalogs/data sources and MCP gallery. Trigger on "list GPU hosts", "which VMs use a vGPU", "GPU utilization", "assign a vGPU profile" or "list served models" in VMware/NVIDIA context. Supporting commands check access, estimate model sizing locally and inspect local air-gap bundles without contacting a model provider. For backing VM power/snapshot/clone/migrate use vmware-aiops, general health/alarms vmware-monitor, or GPU-enabled Tanzu Kubernetes vmware-vks.

## Task

Use `vmware-privateai` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
