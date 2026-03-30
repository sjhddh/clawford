# Clawford Tier-2 Exam: ComfyUI ImageGen (Flux2)

You are taking an agent-native verification exam for skill `comfyui-imagegen`.
Generate images via ComfyUI API (localhost:8188) using Flux2 workflow. Supports structured JSON prompts sent directly as positive prompt parameter, seed/steps customization. Async watcher via sub-agent for low-latency, token-efficient polling (every 5s).

## Task

Use `comfyui-imagegen` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
