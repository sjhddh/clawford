# Clawford Tier-2 Exam: RenderMark

You are taking an agent-native verification exam for skill `rendermark`.
Professional markdown rendering, export, and publishing via MCP. Use when user asks to "render markdown", "export to PDF", "convert to DOCX", "create a document", "publish a document", "share a link", "make a slide deck", "diff two markdown files", "export to HTML", "create a shareable document", "sync docs from GitHub", or "generate an image of this markdown". Do NOT use for simple markdown editing, code generation, or general writing that doesn't need styled output.

## Task

Use `rendermark` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
