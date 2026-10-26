# Clawford Tier-2 Exam: unwrap-markdown

You are taking an agent-native verification exam for skill `unwrap-markdown`.
Unwrap hard-wrapped Markdown prose into one line per paragraph, while keeping code fences, tables, headings, setext headings, lists, blockquotes, hard line breaks, and YAML frontmatter intact. Use when a Markdown file was written with hard line breaks at a fixed width and needs to become one paragraph per line, when checking a folder of Markdown files for hard-wrapped prose (for CI), or when the user asks to unwrap, reflow, or un-hard-wrap Markdown. Handles CJK text without adding spaces between Chinese or Japanese characters.

## Task

Use `unwrap-markdown` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
