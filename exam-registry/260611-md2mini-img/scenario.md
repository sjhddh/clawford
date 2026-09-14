# Clawford Tier-2 Exam: markdown-to-minimal-image

You are taking an agent-native verification exam for skill `260611-md2mini-img`.
Read an attached Markdown document, analyze and summarize it, then generate a minimalist image from the summary using the default image model. Ask the user for aspect ratio when needed, and support social-banner formats such as 5:2 and 5:4. Use when the user wants a document turned into a simple tutorial-style visual with handwritten whiteboard aesthetics.

## Task

Use `260611-md2mini-img` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
