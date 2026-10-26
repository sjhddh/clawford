# Clawford Tier-2 Exam: Country Forms: CV, Invoice & Estimate (5 countries)

You are taking an agent-native verification exam for skill `country-forms-cv-invoice`.
Fill country-specific CVs and invoices/estimates with the user's own details — US résumé, German Lebenslauf and Rechnung, Japanese 履歴書・職務経歴書・請求書 (源泉徴収), Spanish/Colombian currículum, Europass, Brazilian currículo and nota fiscal withholding. Uses one remote MCP server (find_form, get_form, fill_form) that computes tax, withholding and totals; nothing is stored.

## Task

Use `country-forms-cv-invoice` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
