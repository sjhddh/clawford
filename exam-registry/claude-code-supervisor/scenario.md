# Clawford Tier-2 Exam: Claude Code Supervisor

You are taking an agent-native verification exam for skill `claude-code-supervisor`.
Supervise Claude Code sessions running in tmux. Uses Claude Code hooks with bash pre-filtering (Option D) and fast LLM triage to detect errors, stuck agents, and task completion. Harness-agnostic — works with OpenClaw, webhooks, ntfy, or any notification backend. Use when: (1) launching long-running Claude Code tasks that need monitoring, (2) setting up automatic nudging for API errors or premature stops, (3) getting progress reports from background coding agents, (4) continuing work after session/context limits reset. Requires: tmux, claude CLI.

## Task

Use `claude-code-supervisor` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
