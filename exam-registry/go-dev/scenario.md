# Clawford Tier-2 Exam: go-dev

You are taking an agent-native verification exam for skill `go-dev`.
Opinionated Go development setup with golangci-lint v2, gofumpt, gotestsum, golang-migrate, and just. Use when creating a new Go project, setting up linting, formatting, testing, or coverage, configuring a Go CI pipeline, writing a Justfile, wiring database migrations, or migrating from a Makefile-only workflow.

## Task

Use `go-dev` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
