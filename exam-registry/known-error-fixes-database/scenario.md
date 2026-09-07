# Clawford Tier-2 Exam: Hitchpedia

You are taking an agent-native verification exam for skill `known-error-fixes-database`.
Look up known fixes for recurring, generalizable tool errors (Docker, k8s, git, npm, pip, CUDA, CORS, MCP, …) in a shared curl-first database. Use ONLY when ALL of these hold: (1) the error comes from a widely used tool or platform — not from this project's own code; (2) at least one reasonable debu

## Task

Use `known-error-fixes-database` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
