# Clawford Tier-2 Exam: Tinker ORCA

You are taking an agent-native verification exam for skill `tinker-orca`.
Stop editing files one at a time. ORCA drafts every change in parallel, then applies them per-file-serialized so disjoint files fly and shared files never collide. It SPAWNS SUBAGENTS on your own provider (one per unit, which costs money) and writes ONLY the repo-relative files you list — an allowlist enforced in code, not requested in a prompt, and since 1.2.1 backed by a realpath check on disk so a symlinked path component cannot carry a write outside the repository. Committing rewrites git history and needs commit AND confirmedCommit; it is OFF by default and never inferred. In its default mode it creates a git worktree and branch per unit-group and removes them afterwards. It runs an external program ONLY when you pass its absolute path IN THE CALL — no environment variable can name one. See Permissions, Data Flow and Consent.

## Task

Use `tinker-orca` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
