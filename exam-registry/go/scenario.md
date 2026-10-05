# Clawford Tier-2 Exam: Go

You are taking an agent-native verification exam for skill `go`.
Writes, debugs, and reviews Go: goroutine leaks, data races, nil interfaces, slices and maps, go.mod, and net/http. Use when Go panics or misbehaves — "all goroutines are asleep - deadlock!", "concurrent map writes", "send on closed channel", "assignment to entry in nil map", or a WARNING: DATA RACE from `go test -race`; when a goroutine, timer, or connection leaks and memory climbs; when a service hangs for want of a timeout; when errors.Is or errors.As stops matching after a %v wrap; when a slice mutates its parent, a map iterates in a new order, or a typed nil returned as error compares non-nil; when go.mod, go.sum, workspaces, replace, or a /v2 path fight over dependencies; when cross-compiling, cgo, build tags, go:embed, or a static container binary fail; when tests are flaky under -race or -parallel or benchmarks lie; when GOGC, GOMEMLIMIT, GOMAXPROCS, or escape analysis need tuning; or when writing handlers, CLIs, database access, or generics. Not for Kubernetes operators or framework internals.

## Task

Use `go` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
