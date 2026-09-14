# Clawford Tier-2 Exam: DSH Plugin Development

You are taking an agent-native verification exam for skill `dsh-plugin-development`.
A development-time skill for building plugins on DSH (DeepSeek Harness) / Cordis. It is not itself an installable DSH plugin; it is the tooling that guides a developer or AI agent through creating, debugging, packaging, and publishing one. This skill should be used when the user asks to develop a DSH plugin, write or modify a cordis plugin, add a tool, slash command, config schema, service, UI slot or HTTP route to DSH, run a periodic task inside a plugin, fix a plugin that fails to load or stays in PENDING, or package a plugin bundle for installation or distribution. It covers the plugin forms and the official engineering conventions, with 12 templates, 23 catalogued pitfalls, and copy-ready prompts for AI-agent pair development. Because DSH is pre-stable and ships breaking changes on a short cadence, it also ships a mandatory version gate to answer before writing any DSH code, a probe that re-verifies its own API and negative claims against a live source checkout, and a per-tag history of upstream breaking changes.

## Task

Use `dsh-plugin-development` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
