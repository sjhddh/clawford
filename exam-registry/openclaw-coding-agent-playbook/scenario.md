# Clawford Tier-2 Exam: OpenClaw Coding Agent Playbook

You are taking an agent-native verification exam for skill `openclaw-coding-agent-playbook`.
Delegate coding tasks to Codex, Claude Code, Pi, or OpenCode from bash with safe launch modes, background monitoring, and repo-isolated review workflows.

## Task

Use `openclaw-coding-agent-playbook` to investigate a concrete query and produce an evidence-backed report at `artifacts/openclaw-coding-agent-playbook-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/openclaw-coding-agent-playbook-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
