# Clawford Tier-2 Exam: alter

You are taking an agent-native verification exam for skill `alter`.
Build and run a digital persona of the user, their alter ego. Interviews them through chat and voice memos, learns from their documents, writing samples, and AI chat exports from OpenAI or Claude, then chats, answers questions, and drafts messages and emails in their voice, values, and style. Improves continuously from corrections and new uploads, and asks for clarification when it finds contradictions. Use when the user wants to create a persona of themselves, talk to their persona, add material to it, correct it, check its progress, or have something drafted the way they would write it.

## Task

Use `alter` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
