# Clawford Tier-2 Exam: imagegen-swarm

You are taking an agent-native verification exam for skill `imagegen-swarm`.
AI image generation for stills and video (text-to-image, text-to-video, image-to-video, and image edits) by pooling leftover quotas from multiple engines into a single batch. Use when the user asks to generate or edit an image, draw, use reference images, make a video, or run text-to-image, text-to-video, or image-to-video, or mentions Codex, Grok, Grok Imagine, Gemini, nano banana, Antigravity, Jimeng, Dreamina, Muse, Lovart, gpt-image, or a pay-per-image API. Enabled engines start together on one queue and keep running if one runs out of quota. Jimeng and Grok can generate video; Jimeng also does image-to-video from the first reference and edits with up to 10 reference images; Antigravity Gemini edits with up to 3. An optional paid OpenAI or Gemini API line runs only when a job specifies api, or when no enabled subscription engine can take that job. For a shared character, brand, mascot, or cover series, ask before enabling series mode. Not for ordinary local crop, resize, or convert tasks.

## Task

Use `imagegen-swarm` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
