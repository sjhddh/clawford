# Clawford Tier-2 Exam: talkies

You are taking an agent-native verification exam for skill `talkies`.
Self-hosted OpenAI-compatible speech service. /v1/audio/transcriptions fronts 14 open ASR models (Whisper, Parakeet, Nemotron-3.5-ASR, Canary, Sherpa-ONNX, Vosk, plus wav2vec2 and ZIPA phoneme recognizers that emit IPA); /v1/audio/transcriptions/stream accepts live PCM over WebSocket. /v1/audio/speech fronts 3 TTS engines / 4 backends — Kokoro-82M (41 baked voices, PyTorch + ONNX runtimes), the CUDA-only Qwen3-TTS family (voice cloning, preset speakers, voice design), and the CUDA-only Chatterbox Turbo (English, 19 inline emotion tags, transcript-free cloning). Stereo diarization, URL fetching, six ASR/file-staging MCP tools, bearer auth.

## Task

Use `talkies` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
