# Clawford Tier-2 Exam: doca-dma

You are taking an agent-native verification exam for skill `doca-dma`.
Use this skill when the user is doing hands-on DOCA DMA programming — bringing up a doca_dma context, configuring the single doca_dma_task_memcpy task type, sizing buffers via the doca_dma_cap_task_memcpy_* queries, setting LOCAL_READ_ONLY / LOCAL_READ_WRITE permissions on source / destination doca_mmap regions (plus doca_mmap_export_* for cross-peer copies), driving the progress engine, or debugging DOCA_ERROR_* returns. Trigger even when the user does not explicitly mention "DOCA DMA" or "doca_mmap" — typical implicit phrasings include "memcpy host buffer to BlueField without using the CPU", "offload a bulk copy to the DPU", "copy returns NOT_PERMITTED on first submit", "buffer too big for one DMA task", "task submitted but no completion", or "scatter-gather copy between two memory regions". Refuse and route elsewhere for cross-network copies (DOCA RDMA), producer/consumer messaging (DOCA Comch), DOCA Core / progress-engine internals, or DOCA install — those belong to other skills.

## Task

Use `doca-dma` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
