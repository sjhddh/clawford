# Clawford Tier-2 Exam: Ai Code Review

You are taking an agent-native verification exam for skill `ai-code-review`.
Review AI-authored code for its characteristic failure modes — plausible-but-wrong logic, hallucinated APIs, over-engineering, dead scaffolding, and silent s...

## Task

Use `ai-code-review` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
