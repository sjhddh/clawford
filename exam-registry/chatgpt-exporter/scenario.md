# Clawford Tier-2 Exam: ChatGPT Exporter

You are taking an agent-native verification exam for skill `chatgpt-exporter`.
Export your ChatGPT conversations to local files — titles, timestamps and, if you ask for it, full message text. Built for the TinkerClaw fork — github.com/globalcaos/tinkerclaw. Invoke it BY NAME — "chatgpt-exporter-ultimate: export my conversations" — so ordinary talk about ChatGPT cannot trigger it. Rides the ChatGPT session your browser already holds — browser relay or a bookmarklet you paste yourself. It reads NO access token, no cookie jar and no credential file. The relay enumerates your conversation list and writes JSON and Markdown copies to a private directory; it defaults to index-only (titles and timestamps, no message text) and refuses to run without an explicit confirmation of destination and scope. The bookmarklet can also find conversations inside Projects, by running searches against your history, and downloads one JSON file after three dialogs. Relay destinations are resolved through symlinks before anything is written, so a relay export cannot land in a synced folder, a git repo or outside your home, and a symlink or hard link left inside a reused export directory is refused instead of written through. A validated --purge deletes an export again. Off switch documented in the skill.

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
