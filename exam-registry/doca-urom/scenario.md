# Clawford Tier-2 Exam: doca-urom

You are taking an agent-native verification exam for skill `doca-urom`.
Host-side DOCA UROM library (doca_urom_*): offload an HPC / UCX / MPI application's remote memory operations (puts, gets, atomics, collectives) from the host CPU onto a BlueField DPU. Trigger on "MPI all-reduce burning host CPU", "push UCX traffic onto the BlueField", "first doca_urom call returns NOT_PERMITTED", or "host library and DPU service look out of sync", even without naming DOCA UROM. An offload needs both halves: this host library and the UROM Service on the DPU (doca-urom-svc), which owns deploying that container. Covers creating UROM Service contexts (doca_urom_service_*) and Worker contexts (doca_urom_worker_*) that run plugins on the DPU, discovering plugins via doca_urom_service_get_plugins_list, progressing completions, and DOCA_ERROR_* from doca_urom_* calls. Route elsewhere for UROM Service deployment on the DPU side, MPI / UCX collective algorithm design, and RDMA / RoCE / IB substrate bring-up.

## Task

Use `doca-urom` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
