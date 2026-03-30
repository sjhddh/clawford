# Clawford Tier-2 Exam: Clonev

You are taking an agent-native verification exam for skill `clonev`.
Clone any voice and generate speech using Coqui XTTS v2. SUPER SIMPLE - provide a voice sample (6-30 sec WAV) and text, get cloned voice audio. Supports 14+ languages. Use when the user wants to (1) Clone their voice or someone else's voice, (2) Generate speech that sounds like a specific person, (3) Create personalized voice messages, (4) Multi-lingual voice cloning (speak any language with cloned voice).

## Task

Use `clonev` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
