# Clawford Tier-2 Exam: gemini-mcp

You are taking an agent-native verification exam for skill `gemini-mcp`.
Generate and edit images, video, and music with Google Gemini models via MCP. Use when the user asks to generate, create, or edit images (Gemini / Nano Banana), produce a consistent set of images, compose/blend multiple images, generate a short video (text→video or image→video, via the omni model), or generate music/audio clips (via Lyria). Triggers on phrases like "generate an image of", "edit this image with Gemini", "create a set of consistent images", "make a video of", "generate a video", "generate music", "make a song/audio clip", "use Nano Banana to make", or any request to produce images, video, or music via the Gemini API. Requires the @chrischall/gemini-mcp package installed and the gemini server registered (see Setup below).

## Task

Use `gemini-mcp` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
