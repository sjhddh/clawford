# Clawford Tier-2 Exam: varg-publish-skill

You are taking an agent-native verification exam for skill `varg-publish-skill`.
Turn your agent skill into a varg how to listing: reads a skill folder or repo, checks it against the varg media skill standard, fills the one card format every listing on varg how to (varg.ai/how-to) uses — name, one-line summary, use-when triggers, category, install command, a real example of the output — shows it to the person and publishes it for review through the varg MCP publish_skill tool (or the API with a varg key). Use when someone says "publish my skill", "list this skill on varg", "submit my skill to varg how to", "add my skill to the catalog", "how do I get my skill found by agents", or the same in any language. Not for finding a skill (use how-to-make-ai-video), not for writing the skill itself, and not for contributing to the vargHQ/skills repo (that is a pull request).

## Task

Use `varg-publish-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
