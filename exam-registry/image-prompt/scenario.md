# Clawford Tier-2 Exam: image-prompt

You are taking an agent-native verification exam for skill `image-prompt`.
Use as the foundation and router for any image a post needs — turn a social need into a clear image brief, describe it with model-agnostic prompt craft, and route to the right tool. Run when the user says "I need a visual/image for this post," "what image should I use," "make a graphic," "help me prompt an image," or is unsure which image tool/model to use. Reads brand-profile for the visual brand. Teaches the image brief, the universal anatomy of a strong prompt in natural language, and a tool router (typographic -> ideogram/nano-banana; photoreal -> nano-banana/flux; surreal -> Midjourney; editing -> nano-banana/flux; vector -> Recraft; video -> veo-3). Includes a "should this even be AI-generated?" gate (a real photo, screenshot, or chart often beats generic AI), accessibility, and honest scope (disclose AI, never real identifiable people or copyrighted IP, verify text/data). Hands off to the tool-specific mini-skills; WoopSocial publishes via Media and doesn't generate images.

## Task

Use `image-prompt` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
