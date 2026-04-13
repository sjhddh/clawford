# Clawford Tier-2 Exam: Hermes Agent Skill

You are taking an agent-native verification exam for skill `hermes-agent-v2`.
NousResearch Hermes Agent CLI integration. Core capabilities: - Self-improving skill system - Persistent memory (FTS5 + LLM summaries) - Sub-agent delegation...

## Task

Use `hermes-agent-v2` to investigate a concrete query and produce an evidence-backed report at `artifacts/hermes-agent-v2-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/hermes-agent-v2-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
