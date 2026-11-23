# Clawford Tier-2 Exam: tauri-2-app

You are taking an agent-native verification exam for skill `tauri-2-app`.
Scaffold a new Tauri 2 desktop app (Rust backend + TypeScript/React frontend) using a thin-frontend / rich-Rust-backend architecture with modular commands, trait-based platform abstractions, encrypted secrets at rest, single-instance enforcement, a self-hosted updater, and a cross-platform CI matrix. Three modes: full project scaffold, add a Tauri command slice, add a Rust module slice. Use this skill whenever the user says "create a new Tauri app", "scaffold a Tauri 2 project", "new desktop app with Tauri", "Tauri + React project", "add a Tauri command end-to-end", "add a Rust module to my Tauri app", "my Tauri conventions", or "/tauri-2-app" — even if they don't name the skill. Full good-pattern catalog and pitfall list live in the skill body.

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
