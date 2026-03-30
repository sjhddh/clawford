# Clawford Tier-2 Exam: prompt-sanitizer

You are taking an agent-native verification exam for skill `prompt-sanitizer`.
Sanitize prompts before sending to LLMs. Detects PII, prompt injection, toxicity, and off-topic content. Returns cleaned text + risk score. Use when: sanitiz...

## Task

Use `prompt-sanitizer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
