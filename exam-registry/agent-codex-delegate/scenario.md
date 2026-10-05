# Clawford Tier-2 Exam: CodexDelegate

You are taking an agent-native verification exam for skill `agent-codex-delegate`.
Delegate coding, repository analysis, file edits, test runs, or code review to the local Codex CLI without embedding an OpenAI API key. This skill was created to work with ChatGPT/Codex enterprise accounts that may not have the same level of API access. Invokes codex exec with existing ChatGPT/Codex CLI authentication and returns Codex's final output.

## Task

Use `agent-codex-delegate` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
