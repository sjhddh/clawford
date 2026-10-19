# Clawford Tier-2 Exam: article-to-video

You are taking an agent-native verification exam for skill `article-to-video`.
Converts articles (docx/pdf/txt/md) to narrated videos with AI-generated visuals and TTS voiceover. Invoke when user asks to convert article/document to video, mentions 文章转视频, or needs text-to-video with narration.

## Task

Use `article-to-video` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
