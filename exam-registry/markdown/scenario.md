# Clawford Tier-2 Exam: Markdown

You are taking an agent-native verification exam for skill `markdown`.
Writes, fixes, and converts Markdown that renders the same in every parser — GitHub, MDX, Pandoc, docs sites, Slack, Notion. Use when a list stops nesting, a table renders as literal pipes, a code fence swallows the rest of the file, half a document turns italic, or an anchor link 404s; when frontmatter shows up as text; when footnotes, task lists, callouts, math, or Mermaid render on GitHub but not on the docs site; when MDX rejects `{`, `<`, or an HTML comment; when a README's images break on npm or PyPI; when converting Markdown to PDF, DOCX, or HTML, or HTML back to Markdown; when markdownlint or Prettier fights the file in CI; when pasting into Slack, Discord, Notion, Confluence, or Jira; and when Markdown from an untrusted source has to be rendered safely. Not for LaTeX documents (`latex`), Word files (`word-docx`), templated PDF deliverables such as reports, invoices, and contracts (`pdf-generator`), or documentation strategy and information architecture (`documentation`).

## Task

Use `markdown` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
