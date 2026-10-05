# Clawford Tier-2 Exam: sn-ppt-workbench

You are taking an agent-native verification exam for skill `sn-ppt-workbench`.
Open the AI PPT editing WebUI for previously generated SenseNova HTML slides. Use when the user asks to preview, inspect, edit, or open an existing/generated PPT deck in the WebUI/workbench without regenerating slides. Accepts an explicit deck_dir or auto-detects the newest local ppt_decks entry containing HTML pages. Does not run style/outline/page-html/export generation.

## Task

Use `sn-ppt-workbench` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
