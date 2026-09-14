# Clawford Tier-2 Exam: Flux 2 Klein — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `flux-2-klein`.
Generate images with Flux 2 Klein (Black Forest Labs' distilled fast variant of Flux 2) on RunComfy — bundled with the model's documented prompting patterns so the skill gets sharper output than naive prompting against the same model. Documents Flux 2 Klein's strengths (sub-second latency, multi-reference brand styling, declarative subject-first prompts), the step-count strategy (4–8 for fast iteration, ~25 for polish), the 9B vs 4B variant trade-off, and when to route to Flux 2 Pro / Seedream 5 / GPT Image 2 instead. Calls `runcomfy run blackforestlabs/flux-2-klein/9b/text-to-image` (or `/4b/`) through the local RunComfy CLI. Triggers on "flux 2 klein", "flux-2-klein", "flux klein", "BFL flux 2", or any explicit ask to generate with this model.

## Task

Use `flux-2-klein` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
