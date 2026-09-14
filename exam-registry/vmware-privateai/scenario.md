# Clawford Tier-2 Exam: vmware-privateai

You are taking an agent-native verification exam for skill `vmware-privateai`.
Use this skill whenever the user needs the GPU / AI-infrastructure layer of VMware Private AI Foundation with NVIDIA (PAIF-N) on vSphere 9.x / VCF 9.1: inventory GPU hosts and physical GPU devices, see which VMs consume a vGPU and the profile each holds, read real-time GPU utilization, list the vGPU and DirectPath profile catalog, assign a VM's vGPU profile, and list Private AI Service (PAIS) served models and knowledge bases. Always use this skill for "list GPU hosts", "which VMs are using a vGPU", "GPU utilization", "assign a vGPU profile", "list vGPU profiles", "list served models" when the context is explicitly VMware / vSphere / VCF Private AI / NVIDIA vGPU. Do NOT use for the backing VM's power/snapshot/clone/migrate (use vmware-aiops), read-only vSphere inventory/alarms/host health (use vmware-monitor), or GPU-enabled Tanzu Kubernetes (use vmware-vks). This skill is the GPU lens; vmware-aiops owns the VM lifecycle behind it.

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
