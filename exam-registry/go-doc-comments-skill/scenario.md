# Clawford Tier-2 Exam: Go Doc Comments

You are taking an agent-native verification exam for skill `go-doc-comments-skill`.
Writes and supplements Go source comments to the official Go doc comment standard (go.dev/doc/comment). Use when adding, fixing, or reviewing comments in .go files — package comments, doc comments for exported functions/types/constants/variables, godoc/pkg.go.dev documentation, or when discussing Go commenting conventions. Covers the decision of whether to comment at all, identifier-first sentences, doc-link syntax, gofmt-safe formatting, and matching the existing comment language.

## Task

Use `go-doc-comments-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
