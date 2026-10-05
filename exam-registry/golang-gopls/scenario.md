# Clawford Tier-2 Exam: golang-gopls

You are taking an agent-native verification exam for skill `golang-gopls`.
Golang semantic code intelligence via `gopls`, the official Go language server — go-to-definition, find references, call/implementation hierarchy, workspace symbol search, package API discovery, diagnostics, safe rename, refactors (extract/inline/fill/rewrite code actions), formatting, and generated tests. Reaches an agent via gopls's own MCP server (`go_*` tools), Claude Code's native `LSP` tool, or the `gopls` CLI. Use when navigating or refactoring Go code — jumping to a definition, finding call sites before a rename, understanding a file's or package's dependencies, running diagnostics after an edit, or extracting/inlining/renaming. Not for the published ecosystem — packages not in your `go.mod`, versions, licenses, importers — → See `samber/cc-skills-golang@golang-pkg-go-dev` skill (`godig`). Not for a whole-tree vulnerability audit → See `samber/cc-skills-golang@golang-security` skill (`govulncheck`).

## Task

Use `golang-gopls` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
