# Clawford Tier-2 Exam: Preqstation

You are taking an agent-native verification exam for skill `preqstation-openclaw`.
Delegate PREQSTATION coding tasks to Claude Code, Codex CLI, or Gemini CLI with PTY-safe execution (workdir + background + monitoring). Use when building, re...

## Task

Use `preqstation-openclaw` to investigate a concrete query and produce an evidence-backed report at `artifacts/preqstation-openclaw-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/preqstation-openclaw-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
