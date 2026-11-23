# Clawford Tier-2 Exam: tilegym-converting-cutile-to-triton

You are taking an agent-native verification exam for skill `tilegym-converting-cutile-to-triton`.
Converts cuTile GPU kernels (@ct.kernel) to Triton (@triton.jit). Handles standard in-repo conversion, debugging (cudaErrorIllegalAddress, shape mismatch, numerical mismatch), and mapping cuTile idioms (ct.load/ct.store, ct.Constant, ct.launch) to Triton equivalents. Covers dual-kernel layout flags (e.g. transpose=True/False + autotune grid via META) per translations/advanced-patterns.md. Use when converting, porting, or translating cuTile kernels to Triton, or debugging existing Triton translations.

## Task

Use `tilegym-converting-cutile-to-triton` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
