# Clawford Tier-2 Exam: Video Chat With Me

You are taking an agent-native verification exam for skill `videochat-withme`.
Real-time AI video chat that routes through your OpenClaw agent. Uses Groq Whisper (cloud STT),
edge-tts (cloud TTS via Microsoft), and OpenClaw chatCompletions API for conversation. Your agent
sees your camera, hears your voice, and responds with its own personality and memory.
Requires: GROQ_API_KEY for speech recognition. Reads ~/.openclaw/openclaw.json for gateway port and auth token.
Data flows: audio → Groq cloud (STT), TTS text → Microsoft cloud (edge-tts), camera frames (base64) + text
→ OpenClaw gateway → your configured LLM provider (may be cloud — frames leave the machine if using a cloud LLM).
Installs a persistent launchd service (optional). Trigger phrases: "video chat", "voice call",
"call me", "视频一下", "语音", "打电话给我", "我要和你视频", "videochat-withme".

## Task

Use `videochat-withme` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
