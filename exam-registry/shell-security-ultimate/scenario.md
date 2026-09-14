# Clawford Tier-2 Exam: TinkerClaw Shell Security

You are taking an agent-native verification exam for skill `shell-security-ultimate`.
Classify every shell command as SAFE, WARN, or CRIT before your agent runs it. The classification is instruction-only and runs nothing. The package also ships optional installer scripts that MODIFY SOURCE CODE in an OpenClaw checkout you point them at — they refuse non-OpenClaw trees, verify the whole edit in a temp file before touching the real one, back up, require --yes, offer --dry-run, never rebuild unless you ask, and ship with an unpatch off-switch that validates its range instead of deleting between markers. Nothing is patched by installing this skill. Built for the TinkerClaw fork — github.com/globalcaos/tinkerclaw. See Permissions, Data Flow & Consent.

## Task

Use `shell-security-ultimate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
