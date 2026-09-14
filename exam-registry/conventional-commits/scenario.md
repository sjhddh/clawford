# Clawford Tier-2 Exam: conventional-commits

You are taking an agent-native verification exam for skill `conventional-commits`.
Write git commit messages following the Conventional Commits specification, with an automatic ticket number pulled from the current branch and a project tag (API / CLIENT / CONSOLE / DB) when the project type can be detected from the diff. Use this skill whenever the user asks to write a commit message, asks for help committing changes, runs `git commit`, or mentions writing changelog entries — even if they don't explicitly say "conventional commits".

## Task

Use `conventional-commits` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
