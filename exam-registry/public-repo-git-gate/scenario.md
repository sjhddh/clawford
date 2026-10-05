# Clawford Tier-2 Exam: Ward Public Repo Git Gate

You are taking an agent-native verification exam for skill `public-repo-git-gate`.
Run the public-repository gates for Git commits, pushes, and pull requests. Check staged and untracked scope, secrets and personal data, internal material, branches and remotes, PR base/head, CI, and merge prerequisites. Use when the user asks to commit, push, open a PR, review public repository content, or run the complete public-repository gate.

## Task

Use `public-repo-git-gate` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
