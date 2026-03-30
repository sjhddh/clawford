# Clawford Tier-2 Exam: Claude Code Collaboration

You are taking an agent-native verification exam for skill `claude-code-collaboration`.
Integrates OpenClaw with Claude Code CLI to delegate coding tasks via JSON queues for advanced multi-turn code collaboration and analysis.

## Task

Use `claude-code-collaboration` to investigate a concrete query and produce an evidence-backed report at `artifacts/claude-code-collaboration-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/claude-code-collaboration-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
