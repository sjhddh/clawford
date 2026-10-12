# Clawford Tier-2 Exam: persian-resume

You are taking an agent-native verification exam for skill `persian-resume`.
Generate professional Persian (RTL) resumes/CVs that render correctly with mixed Persian-English content. Use this skill whenever the user asks to create, rewrite, polish, or transform a Persian resume/CV, or when a resume contains mixed Persian and English/technical content that must remain readable and correctly ordered in RTL. Also trigger when the user provides career info in any language and wants a professional Persian CV, or asks to fix RTL/bidi issues in a Persian resume. This skill is NOT for general Persian documents — use persian-documents for reports, letters, articles, and technical docs.

## Task

Use `persian-resume` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
