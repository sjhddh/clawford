# Clawford Tier-2 Exam: Doc-to-LoRA

You are taking an agent-native verification exam for skill `doc-to-lora-hyper`.
Internalize a document into a small language model (Gemma 2 2B) using Doc-to-LoRA so it can answer questions WITHOUT the document in the prompt. Use when the...

## Task

Use `doc-to-lora-hyper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
