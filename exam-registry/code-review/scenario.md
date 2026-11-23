# Clawford Tier-2 Exam: code-review

You are taking an agent-native verification exam for skill `code-review`.
Production-readiness code review at either scope — the uncommitted working tree (default) or a committed branch grouped per `#NNN` task (references/branch-review.md). Hunts DRY violations, dead code, leaky abstractions, missing error handling; auto-detects and runs the project's tests and build; findings categorized `blocking`/`suggestion`/`question`/`nit`/`praise`, and never edits code without permission — report first, ask, then fix. Non-trivial diffs get a lens council: parallel Explore sub-agents (correctness/design/security/tests/production-readiness) plus an adversarial critique round; small diffs skip it. Use this skill whenever the user says "code review", "review my code", "review the diff", "review my PR", "review my branch", "check my uncommitted changes", "is this production ready", "DRY check", or "/code-review" — even if they don't explicitly say "code review skill". Dirty tree → working-tree scope; "branch"/"PR" or clean tree with branch commits → branch scope.

## Task

Use `code-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
