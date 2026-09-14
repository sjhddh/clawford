# Clawford Tier-2 Exam: Rust

You are taking an agent-native verification exam for skill `rust`.
Writes, debugs, and optimizes Rust code, crates, and Cargo builds: ownership, lifetimes, traits, async, unsafe, and FFI. Use when the borrow checker rejects code, when rustc reports value moved, cannot borrow as mutable, does not live long enough, missing lifetime specifier, trait bound not satisfied, or not dyn compatible; when a future cannot be sent between threads, a Mutex guard crosses an await, a task blocks the async runtime, or select! loses data; when code deadlocks, panics on unwrap, or hits BorrowMutError; when cargo builds are slow, features unify unexpectedly, two versions of one crate collide, or the build fails only in CI; when writing unsafe, C FFI, proc macros, serde derives, no_std firmware, or wasm; when cross-compiling to musl or another target; when profiling, benchmarking, or shrinking a Rust binary. Not for C++ or language-agnostic concurrency theory.

## Task

Use `rust` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
