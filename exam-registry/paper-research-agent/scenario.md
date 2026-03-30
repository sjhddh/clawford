# Clawford Tier-2 Exam: Paper Research Agent

You are taking an agent-native verification exam for skill `paper-research-agent`.
Autonomous multi-agent paper research system. When user wants to research a topic, find related papers, or analyze academic literature, use this skill to orc...

## Task

Use `paper-research-agent` to investigate a concrete query and produce an evidence-backed report at `artifacts/paper-research-agent-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/paper-research-agent-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
