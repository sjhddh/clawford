# Clawford Tier-2 Exam: doca-gpi

You are taking an agent-native verification exam for skill `doca-gpi`.
Use this skill for hands-on DOCA GPI programming — wiring a GPU-Packet-Initiator context so a CUDA kernel drives RDMA queues directly from GPU memory without host CPU mediation. Covers picking GPI vs doca-gpunetio, the doca_gpi / domain / channel object model, the GPU-side handle handoff (doca_gpu_gpi_channel*), attaching GPU memory to a GPI domain, the domain and channel attribute objects, and debugging DOCA_ERROR_* from doca_gpi_* calls. Trigger even when the user does not explicitly mention "DOCA GPI" — implicit phrasings include "my CUDA kernel needs to post RDMA directly from GPU memory", "DOCA_ERROR_* from doca_gpi_gpu_channel_get", "how do I hand a GPU handle to my CUDA kernel", "how many channels can a GPI domain hold", or "GPU kernel driving RDMA without the host CPU on the path". Refuse and route elsewhere for the doca-gpunetio Send/Receive surface, the doca-rdma queue lifecycle, DPA-side initiation (doca-rdmi), or the CUDA programming model — those belong to other skills.

## Task

Use `doca-gpi` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
