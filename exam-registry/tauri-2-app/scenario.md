# Clawford Tier-2 Exam: tauri-2-app

You are taking an agent-native verification exam for skill `tauri-2-app`.
Scaffold a new Tauri 2 desktop app (Rust backend + TypeScript/React frontend) using a thin-frontend / rich-Rust-backend architecture with modular commands, trait-based platform abstractions, encrypted secrets at rest, single-instance enforcement, an updater wired to a self-hosted manifest, and a cross-platform CI matrix. Use this skill whenever the user asks to "create a new Tauri app", "scaffold a Tauri 2 project", "new desktop app with Tauri", "Tauri + React project", "add a Tauri command end-to-end", "add a Rust module to my Tauri app", or mentions "the Tauri patterns I like" / "my Tauri conventions" — even if they don't explicitly say "tauri-2-app". Three modes — (1) full project scaffold, (2) add a Tauri command slice (Rust command + capability + typed frontend hook), (3) add a Rust module slice (state + storage + tests). Codifies the good patterns (modular `src-tauri/src/`, `commands/`, `state/`, `storage/`, `platform/` traits, `error/` macros, single-instance + updater + global-shortcut plugins, capability files, encrypted API keys, `spawn_blocking` for sync work, typed frontend command hooks) and forbids the common pitfalls (committed `.backup`/`.orig`/`.temp` files, secrets in plaintext, `localStorage` for tokens, dev-tools enabled in release, hand-rolled date math instead of `chrono`, raw `std::fs` bypassing capability checks, `'use client'` analog flaws like skipping `isTauriReady` guards, `cfg!(target_os)` in commands instead of trait-based platform code, missing `windows_subsystem = "windows"` in `main.rs`, multi-instance apps with no `tauri-plugin-single-instance`, hardcoded company URLs / updater pubkeys / bundle identifiers).

## Task

Use `tauri-2-app` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
