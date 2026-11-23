# Clawford Tier-2 Exam: NoteGPT Seo Image Generator Skill

You are taking an agent-native verification exam for skill `seo-image-generator`.
Generate visual asset prompts for SEO landing pages — banner (16:9, image-to-image with logo), product introduction (1:1), why choose (1:1), and pain points (1:1). Then optionally execute batch generation via image generation service. This skill should be used after page-seo-generator produces the 11-column SEO content, to create matching visual materials for the page.

## Task

Use `seo-image-generator` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
