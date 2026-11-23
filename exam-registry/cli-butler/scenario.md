# Clawford Tier-2 Exam: CLI Butler

You are taking an agent-native verification exam for skill `cli-butler`.
Manage local CLI tools through any agent — inventory every installed CLI across package managers (brew, npm, pipx, uv, cargo, gem, apt), install/upgrade/uninstall with provenance routing, trace a CLI's full reference chain (symlinks, PATH lines, launchd, config files, last-used), and enumerate what a CLI can do. Use when the user asks to install, uninstall, upgrade or list CLI tools, asks "what CLI tools are installed", wants to know where a CLI comes from or what references it, or wants to know a command's capabilities. Zero third-party dependencies, macOS/Linux.

## Task

Use `cli-butler` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
