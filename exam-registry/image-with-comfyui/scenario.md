# Clawford Tier-2 Exam: image-with-comfyui

You are taking an agent-native verification exam for skill `image-with-comfyui`.
Use to generate, edit, or animate images and videos through a configured ComfyUI server — trigger with requests like "make a picture of", "replace the background", "cut out / extract the subject of", "turn this into a video", "edit my photo", or "make a 3D mesh of this character". Not for simple non-generation image tweaks. **Qwen-Image 2.1 Turbo** (model id `qwen21t`, the fast 8-step default) is the default model for both text-to-image (T2I) and image editing/multi-image (I2I); it can also **cut out / extract the main subject or any image element into a transparent-background image**. The earlier default **Qwen-Image 2.1** (id `qwen21`, 25-step) is still available via `--model qwen21`. Z-Image / SD3.5 (T2I), Qwen Image Edit (2511, single-image), **MiniMax H3 (FastH3 v2)** (I2V `h3_i2v` default / T2V `h3_t2v` — FastH3 v2 now generates video with an audio track, adding audio-enabled video generation to this skill), Wan2.2 (I2V), and **Pixal3D / Trellis2 (I2M, default image → 3D GLB mesh)** are available. The older **Hunyuan 3D v2.1 (I2M)** is still available under the `hyi2m` entry point. **Destructive cleanup disclosure:** after a run completes and results are saved locally, the script **deletes the server-side copies on the ComfyUI server of the generated outputs of this run AND of any input materials uploaded for generation** (source images / reference images) via `POST /purge_after_retrieval`, unless the user opts out via `--keep` or `COMFYUI_PURGE=0`. This removes only the generated outputs of the current run and the input materials uploaded for that run — nothing else on the server. The agent should tell the user before running when it will delete server-side copies, including any source/reference materials still needed, and honor `--keep` if the user wants to retain them. **All-or-nothing:** the script deletes server copies only when *every* required output of this run has been safely downloaded and saved locally; if **any** output fails to retrieve, nothing is deleted on the server — the run leaves the results available on the server for retry. Purge attempts are retried on every run (a persistent disable after repeated failures was intentionally removed)

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
