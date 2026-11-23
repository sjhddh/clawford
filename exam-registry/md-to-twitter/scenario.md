# Clawford Tier-2 Exam: md-to-twitter

You are taking an agent-native verification exam for skill `md-to-twitter`.
Convert a Markdown article into an X (Twitter) thread, and optionally post it with its images attached. X renders no rich text and cannot carry an image in a paste, so the equivalent of a "paste payload" is a numbered thread script plus an API path that uploads each image and posts the thread in order. Counting follows X's weighted rules: 1 per character, 2 for CJK and emoji, 23 per URL. Use when the user wants to publish a markdown draft to X or Twitter, asks for a thread, asks how to get an article's images onto X, or wants a long article turned into posts.

## Task

Use `md-to-twitter` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
