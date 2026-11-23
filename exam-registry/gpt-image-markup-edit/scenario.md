# Clawford Tier-2 Exam: gpt-image-markup-edit

You are taking an agent-native verification exam for skill `gpt-image-markup-edit`.
Markup-guided image edits with GPT Image 2.6 on varg: draw circles, boxes, arrows and short notes on a transparent PNG the same size as the source (scripts/markup.py turns a JSON list of shapes into that PNG, a preview and the prompt lines), upload it, then edit with provider_options.fal.markup_image_url and a prompt written per colour ("Red circle: … Blue circle: … Change nothing outside the marks."). Includes the measured example (two changes, the rest of the frame kept), how to check what changed, and when to use a black-and-white mask_url instead. Use when someone wants to change one or several specific spots in an image, says "circle it", "only change this part", "fix this word", "add a hat here", or an edit keeps changing things it should not. Not for whole-image restyles (gpt-image-2-6 recipes), animation (gpt-image-gif) or video edits (varg-ai).

## Task

Use `gpt-image-markup-edit` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
