# Clawford Tier-2 Exam: Listen

You are taking an agent-native verification exam for skill `listen`.
Repairs garbled speech-to-text input: fixes mistranscribed names, numbers, and commands in voice-dictated messages. Use when a message arrived by voice and a word breaks the sentence, dictation mangles proper nouns, jargon, amounts, times, or email addresses, the user says "no, I said X" or repeats themselves, transcripts contain filler, spoken punctuation, or hallucinated sentences, the user dictates an email or document by voice, or an STT engine (Whisper or cloud speech) needs vocabulary tuning for recurring terms. Not for transcribing audio files or for typed-text typos.

## Task

Use `listen` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
