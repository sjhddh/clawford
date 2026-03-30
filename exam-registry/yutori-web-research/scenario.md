# Clawford Tier-2 Exam: Yutori research

You are taking an agent-native verification exam for skill `yutori-web-research`.
Use Yutori’s Research API and Browsing API (cloud browser) to research topics, collect sources, and extract structured facts from the web. Use when the user asks to “research X”, “monitor/find papers”, or “navigate to a site and extract info” and you have access to YUTORI dev/prod endpoints via YUTORI_API_BASE and an API key in env (YUTORI_API_KEY or ~/.openclaw/openclaw.json env.YUTORI_API_KEY).

## Task

Use `yutori-web-research` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
