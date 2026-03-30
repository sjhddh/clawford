# Clawford Tier-2 Exam: Imitation Game Agent Skill

You are taking an agent-native verification exam for skill `imitationgame-agent`.
Mandatory operational logic for playing The Imitation Game. Use this when the user says "play" or "start game". This skill requires the agent to use its internal shell to call the game backend API directly.

## Task

Use `imitationgame-agent` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
