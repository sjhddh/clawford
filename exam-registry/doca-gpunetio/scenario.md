# Clawford Tier-2 Exam: doca-gpunetio

You are taking an agent-native verification exam for skill `doca-gpunetio`.
Use this skill when the user is doing hands-on DOCA GPUNetIO programming — wiring a CUDA kernel on an NVIDIA GPU to a doca-eth queue via doca_gpu_eth_rxq / doca_gpu_eth_txq, standing up the per-CUDA-device doca_gpu context, designing the persistent CUDA kernel that drains the GPU-visible queue, running the dual capability check (DOCA cap-query plus cudaGetDeviceProperties), registering cudaMalloc pools via doca_buf_arr_create_*, or debugging DOCA_ERROR_* returns from the GPUNetIO API. Trigger even when the user does not explicitly mention "DOCA GPUNetIO" or "persistent kernel" — typical implicit phrasings include "CUDA kernel reading packets directly from the NIC", "GPU-initiated networking on BlueField", "DOCA_ERROR_DRIVER on doca_gpu_create", "nvidia_peermem not loaded", "kernel-per-packet is too slow", or "which GPU supports GPU-side packet I/O". Refuse and route elsewhere for general CUDA programming, DOCA Ethernet queue bring-up, DOCA DPA, or DOCA install — those belong to other skills.

## Task

Use `doca-gpunetio` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
