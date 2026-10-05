# Clawford Tier-2 Exam: Browser MCP Agent

You are taking an agent-native verification exam for skill `browser-mcp-agent`.
Give an AI agent its own real browser over MCP tool calls - launch, navigate, click, fill, screenshot, extract text, run JS - with a kernel-level real-device fingerprint and a persistent profile, so the session stays logged in between runs and pages see one coherent device instead of a headless.

## Task

Use `browser-mcp-agent` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
