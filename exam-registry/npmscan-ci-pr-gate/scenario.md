# Clawford Tier-2 Exam: npmscan CI PR gate

You are taking an agent-native verification exam for skill `npmscan-ci-pr-gate`.
Turn a dependency change — a before/after package.json/lockfile snapshot, or one or more named "bump X from A to B" upgrades — into one deterministic PASS/WARN/FAIL verdict formatted for a CI check or PR-comment bot, not a conversational report. Use when the user explicitly wants a mergeable/blocking verdict, a "CI gate," a PR status comment, or asks "should this PR be blocked," "is this safe to merge," "gate this dependency bump." Not for a plain explanation of what changed in a diff (dependency-audit's own snapshot-diff flow already covers that conversationally) and not for a single already-installed package's trust investigation (package-trust-check).

## Task

Use `npmscan-ci-pr-gate` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
