# Clawford Tier-2 Exam: Fmind Skill

You are taking an agent-native verification exam for skill `fmind`.
Use FMind as the unified knowledge and external-memory gateway. Import and search tenant knowledge bases through the FMind API, and use L0-L2 memory, context, and published Memory Wiki through an Agent Binding. Never call MemoryCore directly and never expose credentials in prompts, logs, URLs, or saved files.

## Task

Use `fmind` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
