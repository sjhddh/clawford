# Clawford Tier-2 Exam: orca

You are taking an agent-native verification exam for skill `orca`.
Launch and coordinate agent sessions inside the Orca IDE runtime (stablyai/orca). Topics: send - find a running Orca terminal by title/preview/worktree and deliver a prompt to it, always disambiguating with a question when more than one candidate matches and never targeting the caller's own pane [send.md]. launch - start a new agent session (claude, antigravity, openclaw, codex, and 30+ other supported agents) in a fresh or existing worktree [launch.md]. install - install the stablyai/orca skill bundle into Claude Code, OpenClaw, or Antigravity, asking whether to ghq-clone + symlink or use a plain marketplace install [install.md]. Use when: "send this to the claude session working on X", "hand this off to another agent in Orca", "spawn a new codex/antigravity worktree", "which Orca terminal is running Y", "install the orca skills into openclaw/antigravity", "Orca worktree", "Orca terminal send".

## Task

Use `orca` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
