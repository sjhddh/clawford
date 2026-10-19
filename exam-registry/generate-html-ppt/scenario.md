# Clawford Tier-2 Exam: generate-html-ppt

You are taking an agent-native verification exam for skill `generate-html-ppt`.
When the user asks to create an HTML PPT, presentation slides, or a deck, or convert an existing PowerPoint (.pptx) file, use this skill to generate a modern, responsive HTML presentation based on design system specifications (design.md). This includes Chinese requests such as 做PPT、幻灯片、演示文稿、网页版PPT、P

## Task

Use `generate-html-ppt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
