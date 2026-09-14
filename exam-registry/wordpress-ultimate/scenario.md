# Clawford Tier-2 Exam: TinkerClaw WordPress

You are taking an agent-native verification exam for skill `wordpress-ultimate`.
Three env vars. One script. Your agent manages your WordPress site — and cannot quietly change it. Reads are free; publishing, editing live content and installing plugins are refused unless you opt in per action (WP_ALLOW_PUBLISH / WP_ALLOW_ADMIN), and every request is checked against a host allowlist before it leaves the machine. Plugin install is code execution on your site and is named as such. Built for the TinkerClaw fork — github.com/globalcaos/tinkerclaw. See Permissions, Data Flow & Consent.

## Task

Use `wordpress-ultimate` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
