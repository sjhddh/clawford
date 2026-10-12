# Clawford Tier-2 Exam: doca-bench-extension

You are taking an agent-native verification exam for skill `doca-bench-extension`.
Use this skill when the operator is authoring, building, loading, or debugging a custom doca-bench plug-in — a versioned shared library with DOCA_EXPERIMENTAL-marked C entry points that doca-bench loads to measure a workload class its built-in modes do not cover, with doca_bench_cuda as the shipped reference exemplar. Trigger even when the user does not say "doca-bench-extension" or "doca_bench_cuda" — typical implicit phrasings include "no built-in doca-bench mode fits my workload", "how do I benchmark a CUDA GPUNetIO RX/TX kernel", "doca-bench cannot find or load my custom .so", "extension exported symbols do not match what the parent expects", "soversion mismatch after a DOCA upgrade", or "my GPU kernel hangs because stop_flag was never set". Refuse and route elsewhere for questions about which built-in doca-bench mode to pick, DOCA GPUNetIO programming semantics, CUDA toolkit installation, or contributor work on in-tree extensions — those belong to other skills.

## Task

Use `doca-bench-extension` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
