# Clawford Tier-2 Exam: rust-advanced

You are taking an agent-native verification exam for skill `rust-advanced`.
Advanced Rust on Windows, macOS, and Linux: ownership and lifetimes, Result/error design, async Tokio, concurrency, serde/clap/tracing, Cargo features and profiles, testing, profiling, cross-compilation, Windows FFI, and PyO3/maturin. Use when the borrow checker, an async Send error, a linker error, a version conflict, or a production binary needs a real diagnosis.

## Task

Use `rust-advanced` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
