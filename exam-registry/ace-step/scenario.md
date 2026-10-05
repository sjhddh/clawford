# Clawford Tier-2 Exam: ACE Step — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `ace-step`.
Generate, inpaint, and outpaint music with ACE Step on RunComfy via the `runcomfy` CLI. ACE Step is StepFun-AI's open-weights music foundation model — tag-driven composition (genre, mood, instruments), multilingual lyrics with section markers, 5 s to 4 min stereo output, $0.0002–0.0003 per second (≈ 27× cheaper than ElevenLabs Music). Four endpoints: ACE Step text-to-audio (the default), ACE Step 1.5 text-to-audio (50+ language lyrics, refined structured-lyric handling), ACE Step audio-inpaint (regenerate a time range inside an existing track), ACE Step audio-outpaint (extend an existing track before or after). Triggers on "ace step", "ace-step", "acestep", "ACE music", "open music model", "cheap AI music", "inpaint audio", "audio inpaint", "extend music", "audio outpaint", "lengthen track", "music with tags", or any explicit ask to generate or edit music with ACE Step.

## Task

Use `ace-step` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
