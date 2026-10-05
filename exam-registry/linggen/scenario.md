# Clawford Tier-2 Exam: linggen

You are taking an agent-native verification exam for skill `linggen`.
Linggen — durable cross-host memory plus browser control, over two local MCP servers: `ling-mem` for memory, the Linggen engine for browser, X and agents. Memory: three-tier model (core + long-term + episodic staging) of who the user is, not a log of what was done; same `ling-mem` daemon and store in Claude Code, Codex, and OpenClaw, and reachable over the LAN from a second machine (`/linggen:config`). Browser: agent control of the user's own Chrome with per-site permission prompts, and logged-in X session reads.

## Task

Use `linggen` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
