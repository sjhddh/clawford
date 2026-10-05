# Clawford Tier-2 Exam: Whisper STT local server

You are taking an agent-native verification exam for skill `whisper-stt-local-server`.
Ultra-fast local Speech-to-Text bridge (0.2s latency). Optimized for Whisper large-v3-turbo on dedicated GPU infrastructure.

## Task

Use `whisper-stt-local-server` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
