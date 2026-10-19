# Clawford Tier-2 Exam: reverse-engineer-anything

You are taking an agent-native verification exam for skill `reverse-engineer-anything`.
Reverse engineers Android APKs and other software without source code using REA (rea-agents) in a locked-down Docker container: APK package overview, class search, decompiled Java/Kotlin classes and methods via JADX, reference tracing, decoded resources and strings via Apktool, adb device inspection, plus JavaScript/Electron, .NET, Go, Rust, WASM, SQLite and network-capture analysis, and native decompilation with Ghidra when enabled. Runs as a Streamable HTTP MCP server or as one-off CLI commands. Use when the user wants to understand how an app or feature works from its APK or binary, inspect what an APK contains, or find where behavior lives in decompiled code.

## Task

Use `reverse-engineer-anything` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
