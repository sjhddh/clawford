# Clawford Tier-2 Exam: flux

You are taking an agent-native verification exam for skill `flux`.
The FLUX craft skill (Black Forest Labs) — generate and edit on-brand images with the right variant and license. Use when someone wants to generate images with FLUX/FLUX.2/Kontext, edit a generated image, keep a character or product consistent across a campaign, render legible text in images, get brand-exact colors, pick between FLUX variants, or asks if their FLUX use is commercially licensed. Uses the PIXEL framework. Reads image-prompt + brand-profile + design-and-templates first. The agent writes prompts/edit instructions and can call the API where connected; the HUMAN judges every image; WoopSocial publishes. License spine: [dev] outputs are commercial-OK but self-hosting for a commercial service needs a paid BFL tier; Apache-2.0 paths are [schnell]/[klein] 4B. Never use unpermitted likeness, clone trade dress, strip provenance, or invent stats. Distinct from image-prompt, ideogram/nano-banana/Midjourney (sibling tools), ai-image-editing (the edit router this feeds), and canva.

## Task

Use `flux` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
