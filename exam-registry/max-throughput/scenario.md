# Clawford Tier-2 Exam: max-throughput

You are taking an agent-native verification exam for skill `max-throughput`.
Use when running compute-heavy work: model training, fine-tuning, evaluation, benchmarks, simulations, data preprocessing, dataset generation, compilation, test suites, or any long-running batch job, or when a job is slower than expected and needs performance tuning. Detect available CPU/GPU/memory resources, parallelize aggressively, then profile the running job to find the true bottleneck (data pipeline, CPU decode, GPU compute, VRAM, I/O) and tune batch size, DataLoader workers, pre-encoding, and precision accordingly to minimize wall-clock runtime.

## Task

Use `max-throughput` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
