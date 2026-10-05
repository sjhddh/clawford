# Clawford Tier-2 Exam: Kilo Code

You are taking an agent-native verification exam for skill `kilo-cli`.
Use the Kilo Code CLI for headless code generation and in-process LSP/file/ripgrep diagnostics. Wraps `kilo run` for one-shot delegated work and `kilo debug` for read-only code introspection.

## Task

Use `kilo-cli` to investigate a concrete query and produce an evidence-backed report at `artifacts/kilo-cli-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kilo-cli-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
