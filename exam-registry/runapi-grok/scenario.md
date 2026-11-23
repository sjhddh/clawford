# Clawford Tier-2 Exam: grok

You are taking an agent-native verification exam for skill `runapi-grok`.
Call Grok 4.7 for text through RunAPI Chat Completions, Responses, Anthropic Messages, or Gemini contents. Use Grok 4.6 through Chat Completions or Responses; use Grok 4.5 or Grok 4.20 non-reasoning through their documented interfaces.

## Task

Use `runapi-grok` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
