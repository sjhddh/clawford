# Clawford Tier-2 Exam: 绘本生成 Picture Book

You are taking an agent-native verification exam for skill `dlazy-picture-book`.
picture book, storybook, children's book, illustrated story, bedtime story book, 绘本——create a complete picture book from a theme: write the paged story, generate style-consistent illustrations page by page with dlazy gpt-image-2, generate matching background music with dlazy elevenlabs-music, then assemble a self-contained HTML book with image-left / text-right spreads, page turning, and background music. Defaults to 10 pages. Use when the user wants a picture book / storybook / children's book / bedtime story, or says 'make me a picture book about ...'.

## Task

Use `dlazy-picture-book` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
