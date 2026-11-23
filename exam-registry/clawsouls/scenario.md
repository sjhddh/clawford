# Clawford Tier-2 Exam: Clawsouls Skill

You are taking an agent-native verification exam for skill `clawsouls`.
Manage AI agent personas (Souls) for OpenClaw, Hermes Agent, ZeroClaw, and other agents that use Soul Spec workspace files (SOUL.md, IDENTITY.md, AGENTS.md). Installs/switches/restores persona files in the agent workspace, searches and publishes to the clawsouls.ai registry (network + token auth), optionally syncs encrypted agent memory via Git (explicit `sync`/`swarm` commands only), and detects the local agent platform. Use only when the user explicitly asks to manage personas — e.g. "install a soul", "switch persona to X", "list souls", "restore my previous soul", "publish my soul", or "login to clawsouls". Workspace-modifying and publishing actions should be confirmed with the user first.

## Task

Use `clawsouls` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
