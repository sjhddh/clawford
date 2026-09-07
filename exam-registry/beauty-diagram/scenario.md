# Clawford Tier-2 Exam: beauty-diagram

You are taking an agent-native verification exam for skill `beauty-diagram`.
Use when the user asks for a sleek, modern Mermaid / PlantUML diagram (e.g. "beautify this flowchart", "make this look like a deck slide", "produce an SVG of this architecture"), wants AI to generate a diagram from a text description, wants a public share link for a diagram, wants to render every diagram file in a folder, or wants to render Mermaid / PlantUML fenced code blocks inside a Markdown file (README, docs) into images. This skill teaches you to call the Beauty Diagram CLI (`bd`) — never to hand-author SVG when a source diagram exists.

## Task

Use `beauty-diagram` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
