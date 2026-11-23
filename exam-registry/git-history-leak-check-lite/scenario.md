# Clawford Tier-2 Exam: git-history-leak-check-lite

You are taking an agent-native verification exam for skill `git-history-leak-check-lite`.
Scan a diff or patch for accidentally committed secrets — API keys, tokens, private keys, passwords — in added lines only, values masked. Local text scan, zero network. Use before committing or when reviewing a patch for leaks.

## Task

Use `git-history-leak-check-lite` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
