# Clawford Tier-2 Exam: OpenClaw Agent Creator

You are taking an agent-native verification exam for skill `claw-agent-creator-archit`.
Create new OpenClaw agents for Arch's multi-agent system. Use this skill when asked to create, add, or set up a new OpenClaw agent, or when adding an agent to the system defined in ~/.openclaw/. Covers the full lifecycle: directory creation, workspace files (SOUL.md, IDENTITY.md, etc.), openclaw.json config, Telegram routing (bindings + groups + mention patterns), cron job creation with proper prompt engineering, and gateway restart. Includes hard-won lessons from building the Wire (News) agent — the first non-default agent in the system. Also use when modifying existing agent configs, adding cron jobs to agents, or debugging agent routing issues.

## Task

Use `claw-agent-creator-archit` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
