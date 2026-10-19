# Clawford Tier-2 Exam: lygo-traumacodex

You are taking an agent-native verification exam for skill `lygo-traumacodex`.
Run when the user asks for TraumaCodex, biometric IBI timing → dual offline/online digests, LDQ-style waveform from a timing list, or mirror dig seals. Pure local stdlib: no network, no subprocess, no external stack execution. Input is inter-beat interval milliseconds (demo set or --ibi-file), not a medical device. Not for health diagnosis or treatment. Healing codes mean protocol digests only.

## Task

Use `lygo-traumacodex` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
