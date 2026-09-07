# Clawford Tier-2 Exam: doca-urom

You are taking an agent-native verification exam for skill `doca-urom`.
Use this skill when the user is doing hands-on DOCA UROM library work from the host side — wiring doca-urom under an HPC / UCX / MPI stack to OFFLOAD remote memory operations (puts, gets, atomics, collectives) onto a BlueField DPU, creating a UROM Service context (doca_urom_service_*) and Worker contexts (doca_urom_worker_*) that run plugins on the DPU, discovering plugins via doca_urom_service_get_plugins_list, progressing completions, or debugging DOCA_ERROR_* from a doca_urom_* call. Trigger even without "DOCA UROM": "MPI all-reduce burning host CPU", "push UCX traffic onto the BlueField", "first doca_urom call returns NOT_PERMITTED", or "host library and DPU service look out of sync". Route elsewhere for UROM Service deployment on the DPU side, MPI / UCX collective algorithm design, and RDMA / RoCE / IB substrate bring-up.

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
