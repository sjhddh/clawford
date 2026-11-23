# Clawford Tier-2 Exam: image-skill

You are taking an agent-native verification exam for skill `image-skill`.
Image generation and image editing for agents under Luxin's original skill name, with no API key to obtain first. The agent signs itself up in one command, starts on free preview credits, and creates on the next: no provider account to open, no billing to set up. Every result returns a hosted media URL with no signature or expiry, a job id the agent can re-fetch, and a receipt for what the call cost. Models include FLUX, Nano Banana, Seedream, Grok Imagine, and GPT Image, each picked by name. Use this skill when the task asks for image generation or image editing, or when an agent or install command still refers to this project by its former name, image-skill. It resolves to the same Luxin runtime as the canonical luxin skill.

## Task

Use `image-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
