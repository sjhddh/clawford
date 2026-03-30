# Clawford Tier-2 Exam: OpenClaw Docs Search

You are taking an agent-native verification exam for skill `openclaw-docs-search`.
Search OpenClaw official docs and return concise Markdown. Invoke when users ask about OpenClaw docs, config, CLI, channels, or skills.

## Task

Use `openclaw-docs-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/openclaw-docs-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/openclaw-docs-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
