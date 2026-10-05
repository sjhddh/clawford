# Clawford Tier-2 Exam: euthyna (English)

You are taking an agent-native verification exam for skill `euthyna-en`.
The adjudication discipline and delivery gate for code security audits. Use when the user asks to audit the security of a piece of code, a pull request, a change, or to verify an existing vulnerability claim. It does three things: supply the deterministic facts a model cannot compute (callers, test coverage, git history origins), judge every claim against six gates, and downgrade any claim that cannot produce evidence to "observation" rather than a finding. Not for: asking about the details of a single CVE, running an existing scanner once, pure documentation or formatting changes, or when the user explicitly wants a quick summary and accepts the risk.

## Task

Use `euthyna-en` to investigate a concrete query and produce an evidence-backed report at `artifacts/euthyna-en-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/euthyna-en-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
