# Clawford Tier-2 Exam: meta prompt architect lite

You are taking an agent-native verification exam for skill `meta-prompt-architect-lite`.
Turn a plain-language task description into a minimal prompt template — extracts {{variable}} placeholders, detects output format, assembles a ROLE/TASK/INPUT/CONSTRAINTS/OUTPUT scaffold. Use when the user asks to write or templatize a prompt for an LLM.

## Task

Use `meta-prompt-architect-lite` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
