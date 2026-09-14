# Clawford Tier-2 Exam: Flux Kontext Pro — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `flux-kontext`.
Edit images with Flux 1 Kontext Pro (Black Forest Labs' precise local image-edit model) on RunComfy — bundled with the model's documented prompting patterns so the skill gets sharper output than naive prompting against the same model. Documents Flux Kontext's strengths (single-reference precise local edits, strong prompt control, consistent high-fidelity outputs), the schema (single image + prompt), and when to route to Nano Banana Edit / GPT Image 2 edit / Flux 2 Klein instead. Calls `runcomfy run blackforestlabs/flux-1-kontext/pro/edit` through the local RunComfy CLI. Triggers on "flux kontext", "flux-kontext", "flux 1 kontext", "kontext", "BFL kontext", or any explicit ask to edit with this model.

## Task

Use `flux-kontext` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
