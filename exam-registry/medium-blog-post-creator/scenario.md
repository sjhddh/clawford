# Clawford Tier-2 Exam: Medium Blog Post Creator

You are taking an agent-native verification exam for skill `medium-blog-post-creator`.
Publish to Medium without an API token. Medium closed its API to new integrations in Jan 2025, so this skill uses the one stable path left: it writes your post as Medium-ready HTML, deploys it to your own GitHub Pages, and uses Medium's URL importer to create a draft. Say 'blog about X' and it scaffolds your blog repo on first run, then drafts each post end to end. It always stops at a draft for your review and never auto-publishes. Needs GitHub, Medium, and the gh CLI.

## Task

Use `medium-blog-post-creator` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
