# Clawford Tier-2 Exam: normalize-whitespace

You are taking an agent-native verification exam for skill `normalize-whitespace`.
Normalize indentation of a large reference text document (e.g. README.md) to a consistent TAB style while keeping content byte-identical. Use when asked to fix inconsistent leading spaces, align command blocks, or clean indentation spread across hundreds of lines in a prose-heavy, single-fence document. Built from the 2026-09 instguid README.md normalization session.

## Task

Use `normalize-whitespace` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
