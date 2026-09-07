# Clawford Tier-2 Exam: Analysis

You are taking an agent-native verification exam for skill `analysis`.
Audits an AI agent's own setup — workspace, config, memory, skills, jobs, integrations — and reports what is broken, exposed, or wasteful. Use when asked to check the system, run a health check, or diagnose the setup, or when something feels off or the agent got slow or expensive; when a token, key, or .env may be exposed in a file, config, or git history; when permissions or auto-approve rules look too broad; when a scheduled job stops firing, runs twice, or fails silently; when sessions or subagents pile up or loop; when memory files bloat, go stale, contradict, or fall out of their index; when skills collide, never activate, or point at missing files; when an integration returns 401 or 429 or goes quiet; when token spend or context size jumps; and when the same finding keeps coming back. Not for vetting third-party skill code (`skill-audit`), workspace persona and proactivity tuning (`openclaw-workspace`), application monitoring (`monitoring`), or statistical analysis of a dataset.

## Task

Use `analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
