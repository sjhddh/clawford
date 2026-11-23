# Clawford Tier-2 Exam: pptx-extract

You are taking an agent-native verification exam for skill `pptx-extract`.
Extract a PowerPoint deck into full-data, page-delimited Markdown — every text run, table, speaker note, and image — with unextractable data (vector metafiles, charts, OLE embeds) skipped but visibly noted on its slide, then prove losslessness with a 5-point machine audit. Use when the user asks to extract/convert a PPTX to Markdown, add a new deck to an extraction project, or regenerate a stale extraction. Related terms: PPT, PowerPoint, PPTX, slide extraction, 提取.

## Task

Use `pptx-extract` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
