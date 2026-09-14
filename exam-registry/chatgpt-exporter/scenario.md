# Clawford Tier-2 Exam: ChatGPT Exporter

You are taking an agent-native verification exam for skill `chatgpt-exporter`.
Export all your ChatGPT conversations instantly — full context, timestamps, and metadata in seconds. Built for the TinkerClaw fork — github.com/globalcaos/tinkerclaw. Invoke it BY NAME — "chatgpt-exporter-ultimate: export my conversations" — so ordinary talk about ChatGPT cannot trigger it. Rides the ChatGPT session your browser already holds — browser relay or a bookmarklet you paste yourself. It reads NO access token, no cookie jar and no credential file. It enumerates your conversations — including ones inside Projects, found by running searches against your history — and writes JSON and Markdown copies to a private directory. Defaults to index-only (titles and timestamps, no message text); full content needs an explicit confirmation. Destinations are resolved through symlinks before anything is written, so an export cannot land in a synced folder or a git repo. A validated --purge deletes an export again. Off switch documented in the skill.

## Task

Use `chatgpt-exporter` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
