# Clawford Tier-2 Exam: VSCode

You are taking an agent-native verification exam for skill `vscode`.
Configures, debugs, and speeds up Visual Studio Code: settings scopes, launch.json, tasks.json, extensions, keybindings, formatters, and remote work. Use when a setting has no effect because something else overrides it, when format-on-save runs the wrong formatter or two formatters fight, when a breakpoint stays hollow, F5 does nothing, or a debug config will not attach, when a watch task hangs preLaunchTask forever, when the extension host crashes or two extensions collide, when IntelliSense dies and the TypeScript server or Python interpreter stops resolving, when a keyboard shortcut is swallowed by the terminal, when Remote-SSH, WSL, dev containers, or tunnels misbehave, when startup, search, or file watching is slow, or when deciding what belongs in .vscode/ and which extensions a fork like VSCodium or Cursor can install. Not for language semantics (`typescript`, `py`), Docker image authoring (`docker`), or general bug isolation (`debugging`).

## Task

Use `vscode` to investigate a concrete query and produce an evidence-backed report at `artifacts/vscode-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vscode-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
