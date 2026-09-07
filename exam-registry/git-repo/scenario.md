# Clawford Tier-2 Exam: git-repo

You are taking an agent-native verification exam for skill `git-repo`.
Git repository and SourceGit integration. Topics — clone (ghq), conflict-dry-run (isolated merge test), credential-helper (multi-account HTTPS token), doctor (hook health & compliance audit — Tier 1 Base + Tier 2 Conditional taxonomy), fix-worktree (bare repo recovery), githooks (hook silently never runs — hooksPath precedence, passthrough chain, install trade-off), isolate-hunk (stage own edit amid unrelated content), merge-duplicate, rebase-audit (accidental-revert detection during an active rebase), to-ghq (formerly migrate), to-bare, worktree-register (metadata register/relink), patrol (batch inspect), move-worktree (register/reclaim merged PR), rename-worktree, sourcegit, ssh-key (multi-account SSH map), worktree (inventory + reuse + create), worktree-drift-sync (mirror fix across worktrees safely). Use when: "reuse worktree", "multi-account clone", "Repository not found", "wrong account", "concurrent uncommitted edit", "accidental revert", "githooks ignored", "hook not running", "core.hooksPath", "hook not firing", "repo doctor", "hook health", "diagnose hooks", "check hooks" triggers.

## Task

Use `git-repo` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
