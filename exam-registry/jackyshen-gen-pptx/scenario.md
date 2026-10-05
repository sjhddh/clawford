# Clawford Tier-2 Exam: jackyshen-gen-pptx

You are taking an agent-native verification exam for skill `jackyshen-gen-pptx`.
Use this skill to create, edit, read, or extract from .pptx files — generate slide decks / pitch decks / presentations (with UPerform company color palettes by default), parse text from existing decks, modify slides in place, combine or split slide files, and work with templates, layouts, speaker notes, or comments. Trigger when the user mentions "deck," "slides," "presentation," "幻灯片," "PPT," or references a .pptx filename and wants something done to that file or generated as one. Skip if the user only wants to discuss or summarize deck content without touching the file.

## Task

Use `jackyshen-gen-pptx` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
