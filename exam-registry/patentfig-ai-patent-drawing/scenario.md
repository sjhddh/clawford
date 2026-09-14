# Clawford Tier-2 Exam: PatentFig AI Patent Drawing

You are taking an agent-native verification exam for skill `patentfig-ai-patent-drawing`.
Generate patent-office-compliant figures via the PatentFig AI API — patent line art from text (PNG or SVG), vectorize drawings to SVG/DXF/vector PDF, AI-upscale images, and convert to filing-ready TIFF/PDF/PNG. Use when the user asks for patent drawings, patent figures, invention diagrams, USPTO/EPO-compliant line art, vectorizing a drawing for CAD, or preparing figures for a patent filing. Requires a PATENTFIG_API_KEY environment variable.

## Task

Use `patentfig-ai-patent-drawing` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
