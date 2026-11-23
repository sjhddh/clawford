# Clawford Tier-2 Exam: byagent

You are taking an agent-native verification exam for skill `byagent`.
Use when writing, designing, or turning anything into a shareable page: a Markdown document (report, plan, notes, spec, analysis, write-up, README) or an HTML artifact (dashboard, tool, landing page, visualization), including Claude-style artifacts. Markdown files publish directly and are rendered into a styled page. Use it after producing any document, report, plan, analysis, spec, or table that is likely to be reused or shared. Also use for "publish this", "give me a link", agent artifacts, or comments on a published page.

## Task

Use `byagent` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
