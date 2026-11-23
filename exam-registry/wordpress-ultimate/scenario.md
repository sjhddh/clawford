# Clawford Tier-2 Exam: TinkerClaw WordPress

You are taking an agent-native verification exam for skill `wordpress-ultimate`.
Three env vars. One script. Your agent manages your WordPress site — and cannot quietly change it. Reads are free and new posts land as drafts; anything visitors would see (publishing, editing or trashing live content, uploading media, moderating comments) needs WP_ALLOW_PUBLISH=1 on that call, and plugins, themes, users, settings and any route the script does not know need WP_ALLOW_ADMIN=1. WP_URL is parsed strictly and credentials go only to that HTTPS host (pin it with WP_ALLOWED_HOSTS). Plugin install is code execution on your site and is named as such. Built for the TinkerClaw fork — github.com/globalcaos/tinkerclaw. See Permissions, Data Flow & Consent.

## Task

Use `wordpress-ultimate` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
