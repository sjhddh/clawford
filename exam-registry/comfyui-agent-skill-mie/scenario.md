# Clawford Tier-2 Exam: comfyui-agent-skill-mie

You are taking an agent-native verification exam for skill `comfyui-agent-skill-mie`.
Agent skill for running registered ComfyUI workflows through a stable CLI, and for importing a user's own ComfyUI workflow into their private registry after review. Supports image, video, music, and speech generation, plus text-driven matting, face/expression transfer, and voice cloning, on a local or trusted self-hosted ComfyUI server (default http://127.0.0.1:8188). Can check server health, preflight workflow dependencies, and save the server URL. Runs only registered workflows and reviewed private-registry imports; does not execute arbitrary unreviewed workflow JSON.

## Task

Use `comfyui-agent-skill-mie` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
