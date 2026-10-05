# Clawford Tier-2 Exam: Scrape Applied Links

You are taking an agent-native verification exam for skill `bulkurlscraper-skill`.
Bulk-run render-and-parse (from the render-url package) over every url in a JSON file of job/link objects, and record the resulting rendered_page_N.json / parsed_page_N.json paths back into that file. Use this whenever the task is "scrape all these urls from a JSON file" rather than a single one-off render-and-parse call. Installs the `scrape-applied-links` CLI from PyPI on first use.

## Task

Use `bulkurlscraper-skill` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
