# Clawford Tier-2 Exam: global proposal

You are taking an agent-native verification exam for skill `global-proposal`.
Create Arabic (.docx) Word documents with proper right-to-left (RTL) layout, correct font splitting (Arabic script font for Arabic text + Latin font for English text), Arabic-Indic numerals (٠-٩), working table of contents, and verified formatting. Use this skill whenever the user wants to create, generate, or build an Arabic Word document, Arabic report, Arabic thesis/proposal/research, Arabic letter, or any RTL document that must look correct in Microsoft Word — even if they don't explicitly say "Arabic docx" but the content is clearly Arabic. Also use it when the user asks to fix Arabic font issues, convert numbers to Arabic numerals (٠-٩), or configure RTL page numbers in an existing docx.

## Task

Use `global-proposal` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
