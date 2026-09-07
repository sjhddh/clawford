# Clawford Tier-2 Exam: speko

You are taking an agent-native verification exam for skill `speko`.
Use Speko to transcribe audio, synthesize speech, and pick the model for each leg of a voice pipeline from measured benchmarks instead of a hardcoded vendor. One key covers STT, LLM and TTS across 50+ models, with a dry-run route preview, per-language selection, price ceilings and automatic failover. Use when asked to transcribe a recording or voice note, read something aloud, choose or justify a speech model, work in a language other than English, or cap voice spend. For placing phone calls, use the speko-calls skill instead.

## Task

Use `speko` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
