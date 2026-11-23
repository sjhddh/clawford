# Clawford Tier-2 Exam: md-to-linkedin

You are taking an agent-native verification exam for skill `md-to-linkedin`.
Convert a Markdown article into rich text for LinkedIn's article editor, which has no Markdown and renders no tables. Headings, bold, italics, lists, quotes, links and fenced code become real HTML; tables become bullet lists, because the editor cannot draw one, or screenshot to PNG when the grid matters. Writes an HTML file beside the article for the browser copy path. Use when the user wants to publish a markdown draft as a LinkedIn article, asks for LinkedIn rich text, or needs the article editor formatting preserved.

## Task

Use `md-to-linkedin` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
