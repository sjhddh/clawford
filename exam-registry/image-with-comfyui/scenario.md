# Clawford Tier-2 Exam: image-with-comfyui

You are taking an agent-native verification exam for skill `image-with-comfyui`.
Use to generate, edit, or animate images and videos through a user-defined ComfyUI server (COMFYUI_URL env var or comfyui_url in config.json; if no server is reachable the script exits with configuration instructions) — trigger with requests like "make a picture of", "replace the background", "cut out / extract the subject of", "turn this into a video", "edit my photo", or "make a 3D mesh of this character". Not for simple non-generation image tweaks. **Qwen-Image 2.1** is the default model for both text-to-image (T2I) and image editing/multi-image (I2I); it can also **cut out / extract the main subject or any image element into a transparent-background image**. Z-Image / SD3.5 (T2I), Qwen Image Edit (2511, single-image), Wan2.2 (I2V), and Hunyuan 3D v2.1 (I2M, image → 3D GLB mesh) are available on request.

## Task

Use `image-with-comfyui` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
