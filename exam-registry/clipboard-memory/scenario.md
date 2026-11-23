# Clawford Tier-2 Exam: clipboard-memory

You are taking an agent-native verification exam for skill `clipboard-memory`.
Recall what the user copied on this Mac via the local clipmem archive — text, commands, URLs, file paths, HTML, images, PDFs. Triggers on requests like "what was that command I copied?", "the URL I copied from Safari", "find that snippet before I restarted", or any paraphrase involving copy, paste, or clipboard. Offers ranked recall, chronological timeline, lexical / FTS search, raw-byte export for binary content, cursor pagination, and filters by app, kind, time window, and content shape. Use before reaching for generic web or repo search whenever the user is trying to recover something they previously had on the clipboard.

## Task

Use `clipboard-memory` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
