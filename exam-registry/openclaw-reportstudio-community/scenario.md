# Clawford Tier-2 Exam: openclaw-reportstudio-community

You are taking an agent-native verification exam for skill `openclaw-reportstudio-community`.
Generate polished, read-only business reports from CSV/XLSX into static deliverables (xlsx+pdf+pptx) using ReportStudio Community. Use when a user says things like “用这个表生成月报/周报/经营分析/PPT+PDF汇报材料”, provides a file path, asks for trends (day/week/month), TopN breakdowns by a dimension/metric, or wants professional exports without hallucinated claims.

## Task

Use `openclaw-reportstudio-community` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
