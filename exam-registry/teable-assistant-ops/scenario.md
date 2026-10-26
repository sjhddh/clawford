# Clawford Tier-2 Exam: Teable Assistant

You are taking an agent-native verification exam for skill `teable-assistant-ops`.
Operate Teable projects — tables, fields, views, records, SQL queries, automations, headless routines, apps, image generation, and web scraping. Trigger when user mentions Cuppy, Teable, teable CLI, or Teable-style IDs (bseXXX, tblXXX, fldXXX, recXXX, viwXXX), or wants to manage tables/fields/records, build dashboards/apps, generate images or charts, create automations, import/export data, trigger AI fill, or scrape websites (LinkedIn, Amazon, YouTube, etc.) — even if they don't explicitly say "Teable" but are clearly working with a Teable project (called base in the API).

## Task

Use `teable-assistant-ops` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
