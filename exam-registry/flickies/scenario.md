# Clawford Tier-2 Exam: flickies

You are taking an agent-native verification exam for skill `flickies`.
Self-hosted video REST + MCP API. POST JSON, get a video back. Lipsync (LatentSync 1.5 + Wav2Lip/Wav2Lip-GAN) at /v1/video/lipsync, GFPGAN face restore at /v1/video/restore, pure-ffmpeg ops (trim, concat, transcode incl. gif + fps + codec, scale, mux_audio, extract_audio, thumbnail_grid) under /v1/video/*, and ffprobe metadata at /v1/video/info. file_path (staged) xor file_url in; output_path xor output_url out. Fire-and-forget async jobs (async_job=true → 202 → poll /v1/jobs/{id}) with HMAC-signed webhooks. 11 MCP tools at /v1/mcp. Bearer-token auth. CPU + CUDA images. Use when the user wants to lipsync a face to audio, restore faces in footage, trim/concat/transcode/scale/mux/extract/thumbnail video, probe a video's metadata, or drive any of that from an LLM over MCP.

## Task

Use `flickies` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
