# Clawford Tier-2 Exam: vx-repo-contract

You are taking an agent-native verification exam for skill `vx-repo-contract`.
Repository layout contract for vx-managed repos. Use when an agent enters a new repository, adds files to the repo root, edits vx.toml or justfile, or is asked to clean up / normalize repository structure. Five mechanically checkable rules: root file allowlist, lowercase justfile, vx.toml keeps [tools] only, AGENTS.md as single source of truth, no build artifacts at the root.

## Task

Use `vx-repo-contract` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
