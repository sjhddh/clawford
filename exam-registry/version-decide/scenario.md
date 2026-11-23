# Clawford Tier-2 Exam: Version Decider

You are taking an agent-native verification exam for skill `version-decide`.
Decide the NEXT SemVer version number from the SCOPE OF CODE CHANGES for an upcoming release, and output a single, unambiguous recommendation with cited standard clauses. Use only when the user is deciding which version to assign to a release they are about to cut (e.g. "what version should this release be", "major or minor or patch", "what to bump in 0.x", "how to advance alpha/beta/rc", "is this breaking"). NOT for: looking up an already-published version, asking the install command, CalVer/date-based versioning, or general release/project-management questions. Ships a deterministic arithmetic core: same input always yields the same output.

## Task

Use `version-decide` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
