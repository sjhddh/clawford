# Clawford Tier-2 Exam: frugal-subagents

You are taking an agent-native verification exam for skill `frugal-subagents`.
On Claude Fable 5.1 or Opus, subagents inherit the session's expensive model and can spawn more of themselves, so one research fan-out can burn the usage limit in minutes; this plugin's PreToolUse hook runs every subagent on a cheap model unless one is named explicitly, blocks nested spawns and caps spawns per session, and this skill says how to delegate well under those rules. Use whenever the session is about to delegate — spawning agents, running web scans or research passes in parallel, "fan out", "run a fleet of agents", "search across many sites", comparing listings/prices/flights/apartments/suppliers across the web — and whenever the user says subagents burn through the limit, agents spawned more agents, asks to "limit subagents", "run agents on a cheaper model", "set up frugal subagents", "which model did the helpers use", or when Claude Code reports that the frugal-subagents hook failed to run (Node.js missing).

## Task

Use `frugal-subagents` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
