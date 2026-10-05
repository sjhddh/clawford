# Clawford Tier-2 Exam: foreman

You are taking an agent-native verification exam for skill `foreman`.
Dispatch-and-acceptance control desk for farming coding work out to background agents. Probes which worker backend is actually usable, gives each task its own git worktree, sends it to a worker agent via the handoff CLI, takes delivery only as a real commit inside a path whitelist, then gates the merge behind an acceptance protocol whose core rule is that the builder may never touch the tests, assertions, or CI config that judge it. Be aware before using it — it sends repository content to the worker backends you configure; its probes read your local agent login status and may make one minimal request to a backend; and the optional caged worker starts a Docker container, passes DEEPSEEK_API_KEY into it, and lets the worker skip permission prompts inside that container. Use it when batching implementation work out to background agents, or when accepting code that someone else — human or agent — built.

## Task

Use `foreman` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
