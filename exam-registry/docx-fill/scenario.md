# Clawford Tier-2 Exam: Docx Fill

You are taking an agent-native verification exam for skill `docx-fill`.
Generate Word documents by filling templates with content based on reference materials. Use this skill whenever the user provides a .docx template (or asks to fill a Word document) along with reference materials and wants the content written into the template with original styles preserved. Speciali

## Task

Use `docx-fill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
