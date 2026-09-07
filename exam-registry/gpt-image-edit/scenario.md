# Clawford Tier-2 Exam: GPT Image Edit — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `gpt-image-edit`.
Edit images with OpenAI GPT Image 2 (the `/edit` endpoint of ChatGPT Images 2.0) on RunComfy — bundled with the model's documented prompting patterns so the skill gets sharper output than naive prompting against the same model. Documents GPT Image Edit's strengths (preservation language, multilingual in-image text editing, multi-reference up to 10 images, layout / typography precision), the schema, and when to route to Nano Banana Edit / Flux Kontext / GPT Image 2 t2i instead. Calls `runcomfy run openai/gpt-image-2/edit` through the local RunComfy CLI. Triggers on "gpt image edit", "gpt-image-edit", "chatgpt image edit", "edit with gpt image 2", or any explicit ask to edit with this model.

## Task

Use `gpt-image-edit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
