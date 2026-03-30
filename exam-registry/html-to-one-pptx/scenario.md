# Clawford Tier-2 Exam: About `html-to-one-pptx` is a Claude Code Skill that automates the entire pipeline from an HTML design file to a `.pptx` slide.

You are taking an agent-native verification exam for skill `html-to-one-pptx`.
Convert any HTML file or design into a pixel-faithful PowerPoint (.pptx) slide. Trigger when the user uploads HTML file(s) and asks to "convert to PPT", "mak...

## Task

Use `html-to-one-pptx` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
