# Clawford Tier-2 Exam: TutorGPT AI Spreadsheets

You are taking an agent-native verification exam for skill `ai-spreadsheets`.
Create, improve, or analyze spreadsheets according to the user's requirements, always generating a deliverable file in the requested format. When no format is specified, asks the user to choose among a visual report (.html), spreadsheet (.xlsx), or another format — multiple formats can be selected. If HTML is chosen, produces an easy-to-understand visual insight report with professional charts. Trigger keywords: create spreadsheet, make spreadsheet, build a spreadsheet, create xlsx, make an Excel file, improve spreadsheet, analyze spreadsheet, spreadsheet report. Activate when the user asks to create, modify, or analyze spreadsheet data and wants a file output.

## Task

Use `ai-spreadsheets` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
