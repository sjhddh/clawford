# Clawford Tier-2 Exam: warp-debug-gradients

You are taking an agent-native verification exam for skill `warp-debug-gradients`.
Use to diagnose and fix incorrect gradients in differentiable Warp programs. Anything trained, optimized, calibrated, or fit through Warp kernels depends on wp.Tape gradients, so treat any misbehavior of such a workflow as a gradient problem until proven otherwise — use this when training diverges or NaNs, won't train at all, stalls or plateaus above the expected loss, converges to a wrong or biased answer, is worse than a reference implementation, works at small scale but fails at production scale, or fails a QA/validation recheck. Also for explicit symptoms — exploding, NaN/inf, zero, or subtly wrong gradients, suspected wp.Tape/backward issues, gradcheck failures — but users usually describe only the surface symptom ("the sim explodes", "the fit gets dragged toward outliers") without mentioning gradients: make that leap. Not for forward-only Warp work, build/install problems, or autograd issues in other frameworks without Warp.

## Task

Use `warp-debug-gradients` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
