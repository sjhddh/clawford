# Clawford Tier-2 Exam: Lybic Sandbox

You are taking an agent-native verification exam for skill `lybic-sandbox`.
Lybic Sandbox is a cloud sandbox built for agents and automation workflows. Think of it as a disposable cloud computer you can spin up on demand. Agents can perform GUI actions like seeing the screen, clicking, typing, and handling pop ups, which makes it a great fit for legacy apps and complex flows where APIs are missing or incomplete. It is designed for control and observability. You can monitor execution in real time, stop it when needed, and use logs and replay to debug, reproduce runs, and evaluate reliability. For long running tasks, iterative experimentation, or sensitive environments, sandboxed execution helps reduce risk and operational overhead.

## Task

Use `lybic-sandbox` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
