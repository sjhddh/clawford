# Clawford Tier-2 Exam: skill-provenance

You are taking an agent-native verification exam for skill `skill-provenance`.
Version, validate, package, verify, recover, and hand off Agent Skill bundles across local folders, registries, platform uploads, and agent sessions. Use for MANIFEST.yaml, CHANGELOG.md, bundle hashes, stale evals, frontmatter portability, derived skill packages, or version identity that must survive filename changes and cross-platform movement. Do not use for ordinary Git version control that does not involve an Agent Skill bundle. Compatible with the agentskills.io open standard.

## Task

Use `skill-provenance` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
