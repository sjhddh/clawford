# Clawford Tier-2 Exam: Multisage

You are taking an agent-native verification exam for skill `multisage`.
Query Multisage for multi-expert AI answers from Claude, GPT, and Gemini. Use this skill whenever the user wants multiple AI perspectives on a question, says...

## Task

Use `multisage` to investigate a concrete query and produce an evidence-backed report at `artifacts/multisage-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/multisage-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
