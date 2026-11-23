# Clawford Tier-2 Exam: servicepack

You are taking an agent-native verification exam for skill `servicepack`.
Build a Go service on psyb0t/servicepack — clone-and-own framework (not a `go get` library) providing a Service interface (Name/Run/Stop), a singleton ServiceManager that runs services concurrently with dependency-ordered topological start, automatic retry (Retryable), non-fatal failures (AllowedFailure), readiness gating (ReadyNotifier), per-service CLI subcommands (Commander), an App singleton with OnPreRun/OnPostStop lifecycle hooks, gofindimpl-based service auto-discovery codegen, ctxscope/slogging structured logging, and a graceful-shutdown Runner. Import path github.com/psyb0t/servicepack. Use when the user wants related Go services debugged together locally, then deployed as one binary or split into separate microservices, with retry/dependency/readiness semantics.

## Task

Use `servicepack` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
