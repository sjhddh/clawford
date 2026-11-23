# Clawford Tier-2 Exam: artworklady-digitizing

You are taking an agent-native verification exam for skill `artworklady-digitizing`.
Artwork Lady embroidery-digitizing intake adapter — post a digitizing job into the Art work Lady portal (https://www.artworklady.com), which has no API. A Playwright driver logs in, opens the "Embroidery Digitizing" tab on the /placeorder form, fills the fields (job reference, turnaround, file type, color scheme, message), attaches 1–3 files, and — only when told to — clicks Send and confirms the job posted by watching the real order_form_submit response. Use when a decoration needs to be sent out for digitizing: "send this decoration to Artwork Lady", "post the digitizing job", "submit to the digitizer". It is a THIN PORTAL ADAPTER and touches no ERP: give it a job reference, the field values, and local file paths, and it returns a structured result. Pair it with a routine that polls Odoo `digitize.demand` (or `decoration`), downloads the attachments to disk, calls this skill, and updates the record on success. Submitting is gated behind `confirm: true`; the default is a dry run that fills and validates the form but posts nothing. A `fetch` command also downloads the FINISHED files back from `/orders` by job reference (the return leg), returning the DST path — by scraping our own order row so a job-number collision can't fetch the wrong file.

## Task

Use `artworklady-digitizing` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
