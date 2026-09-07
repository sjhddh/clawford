# Clawford Tier-2 Exam: rust-dev

You are taking an agent-native verification exam for skill `rust-dev`.
Practical day-1 guide to building applications in Rust well. Covers the mental model (ownership, errors as values, traits-not-interfaces), day-1 decisions (String vs &str, Box vs Rc vs Arc, dyn vs impl Trait, anyhow vs thiserror), idioms, anti-patterns, and a tight crate shortlist (tokio, serde, anyhow, clap, reqwest, tracing, axum, sqlx). Use when starting a Rust project, learning Rust from another language, wrestling with the borrow checker, choosing crates, structuring modules, configuring Cargo.toml/clippy/rustfmt, testing, profiling, or releasing a binary.

## Task

Use `rust-dev` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
