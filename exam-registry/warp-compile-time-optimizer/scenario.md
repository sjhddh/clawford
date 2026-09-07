# Clawford Tier-2 Exam: warp-compile-time-optimizer

You are taking an agent-native verification exam for skill `warp-compile-time-optimizer`.
Use when compile time or startup time is the problem in code that uses Warp: a request to improve, optimize, or cut compile times; an app that is slow to start or stalls at the first wp.launch; seconds of compiling before real work begins; JIT modules recompiling on every run or every CI job. Only applies when the code being optimized uses Warp kernels. Not for steady-state kernel runtime, memory, correctness, building Warp itself from source, or nvcc/C++ build times.

## Task

Use `warp-compile-time-optimizer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
