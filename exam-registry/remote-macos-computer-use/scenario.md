# Clawford Tier-2 Exam: remote-macos-computer-use

You are taking an agent-native verification exam for skill `remote-macos-computer-use`.
Set up and use cua-driver (an MCP server) so an AI agent running on a remote/cloud host can drive a macOS desktop, with a persistent background daemon + reverse-SSH-tunnel wiring that survives reboots and stays in the background. Use when you want an agent on server A to click/type/capture on a Mac on another network, or to onboard a remote desktop onto any MCP-capable agent (Hermes, Claude Code, Codex, Cursor, OpenCode). Covers install, macOS TCC grants, remote login, reverse tunnel, per-agent MCP config, health checks, and safety (bounded mode).

## Task

Use `remote-macos-computer-use` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
