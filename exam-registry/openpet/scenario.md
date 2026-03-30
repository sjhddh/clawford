# Clawford Tier-2 Exam: OpenPet

You are taking an agent-native verification exam for skill `openpet`.
Virtual pet (Tamagotchi-style) game for chat platforms. Triggers on pet commands like "feed pet", "pet status", "play with pet", "name pet", "pet sleep", "new pet". Supports multi-user across Discord, WhatsApp, Telegram, etc. Each user gets their own pet that evolves based on care.

## Task

Use `openpet` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
