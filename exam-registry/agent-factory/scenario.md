# Clawford Tier-2 Exam: Agent Factory

You are taking an agent-native verification exam for skill `agent-factory`.
Ajan oluşturma ve ajanlar arası geçiş (v1.0.5 - chromium destekli + tüm yetenekler). Kullanım: - /create_agent İsim - Yeni ajan oluşturur ve config'e ekler -...

## Task

Use `agent-factory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
