# Clawford Tier-2 Exam: fasaha

You are taking an agent-native verification exam for skill `fasaha`.
Review and fix AI-generated or AI-translated Arabic so it reads as fluent, native Modern Standard Arabic (MSA) instead of translated/calqued output. Trigger on translating INTO Arabic, writing in Arabic (اكتب بالعربية / اكتبلي بالعربية), writing original Arabic, or reviewing/correcting/proofreading Arabic (‘راجع لي هذا’, 'صحح العربية', 'ترجم هذا للعربية', any Arabic quality check), and proactively before outputting Arabic prose longer than 2-3 sentences. Covers: Latin-script leakage, English sentence-structure calque, word choice/terminology, morphology/agreement, punctuation, hamza spelling, dialectal leakage into MSA. Ships a self-maintained register profile (voice-profile.md) for tone and MSA-vs-Darija choice, a runnable checklist, a terminology glossary, and an accumulating failure log. Register-focused; a separate style/voice skill may layer after it.

## Task

Use `fasaha` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
