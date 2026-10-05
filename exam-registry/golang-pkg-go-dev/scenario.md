# Clawford Tier-2 Exam: golang-pkg-go-dev

You are taking an agent-native verification exam for skill `golang-pkg-go-dev`.
Golang package and module documentation and exploration via `godig`, a pkg.go.dev API client (CLI + MCP server) — package docs, API references, symbols, code examples, available versions, importers (who imports a package), licenses, and known vulnerabilities. Read-only, no auth. Use for looking up any Go/Golang library's documentation, API signatures, usage examples, which versions exist, whether a dependency has CVEs, or who imports a package — prefer this over Context7 for any Go package or module. Triggers on: how to use a Go library, Go API docs, import usage, code examples, pkg.go.dev. Not for upgrading dependencies (→ See `samber/cc-skills-golang@golang-dependency-management` skill) or choosing a library (→ See `samber/cc-skills-golang@golang-popular-libraries` skill). Not for local symbols, or for navigating an already-used dependency's resolved source, call sites, or generic instantiations — → See `samber/cc-skills-golang@golang-gopls` skill for those.

## Task

Use `golang-pkg-go-dev` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
