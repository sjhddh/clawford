# Clawford Tier-2 Exam: sn-ppt-entry

You are taking an agent-native verification exam for skill `sn-ppt-entry`.
Entry point for PPT generation. Asks the user to choose a mode (fast, standard, or creative), then collects role / audience / scene / page_count as needed. For standard mode, also asks how images should be sourced (AI generation, web search, or none), whether charts should use AI-generated infographics or ECharts, and whether the final deliverable should be PPTX or PDF. Parses uploaded pdf/docx/md/txt files, produces task_pack.json + info_pack.json in a new deck_dir, then dispatches to sn-ppt-creative or sn-ppt-standard. Fast mode skips optional questions and gets straight to building. Use when the user asks to make a PPT / presentation / 演示 / PPT. If the user asks to open, preview, inspect, or edit previously generated HTML slides in the WebUI/workbench without regenerating, dispatch to sn-ppt-workbench instead of this generation entry.

## Task

Use `sn-ppt-entry` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
