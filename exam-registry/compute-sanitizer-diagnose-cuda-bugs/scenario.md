# Clawford Tier-2 Exam: compute-sanitizer-diagnose-cuda-bugs

You are taking an agent-native verification exam for skill `compute-sanitizer-diagnose-cuda-bugs`.
Detect and diagnose CUDA correctness bugs with NVIDIA Compute Sanitizer. Routes GPU memory errors, shared-memory data races, uninitialized-memory reads, and synchronization/barrier bugs to the right sub-tool (memcheck, racecheck, initcheck, synccheck) and explains how to build, run, and read the report. Use when debugging illegal memory access, out-of-bounds, misaligned access, leaks, WAW/WAR/RAW races, __shared__ hazards, uninitialized reads, garbage results, hangs, divergent __syncthreads/__syncwarp, or cuda::barrier / wgmma issues. Do NOT use for host/CPU-side bugs (use valgrind or AddressSanitizer) or global-memory data races (out of scope). Trigger keywords - compute-sanitizer, memcheck, racecheck, initcheck, synccheck, CUDA memory error, OOB, race condition, uninitialized memory, __syncthreads, barrier, deadlock.

## Task

Use `compute-sanitizer-diagnose-cuda-bugs` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
