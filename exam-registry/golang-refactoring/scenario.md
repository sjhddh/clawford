# Clawford Tier-2 Exam: golang-refactoring

You are taking an agent-native verification exam for skill `golang-refactoring`.
Golang refactoring — the safe, at-scale process for restructuring existing Go code: a coverage-adaptive safety net, tool-driven behavior-preserving transforms (gopls Rename/Inline/Extract, `gofmt -r`, `eg`, `gopatch`, `go/analysis` fixers), the Fowler catalog mapped to Go, breaking import cycles, moving types across packages, and a human-in-the-loop workflow of small stacked PRs on a refactoring branch. Apply when code is hard to maintain, a function/type has grown too large, a code smell needs fixing, adding a feature is blocked by the current structure, or the user asks to clean up, refactor, or improve Go code — also for renaming at scale, extracting functions/interfaces, moving code between packages, splitting packages, or planning a multi-step refactor. Target styles owned elsewhere → See `samber/cc-skills-golang@golang-naming` (renames), `@golang-project-layout` (splits), `@golang-modernize` (idioms), `@golang-code-style` (control flow), `@golang-design-patterns` (patterns/DI).

## Task

Use `golang-refactoring` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
