# Clawford Tier-2 Exam: Tax Prep — Pre-File Audit Premortem

You are taking an agent-native verification exam for skill `tax-prep-pre-file-audit-premortem`.
Activate when: a return has aggressive/uncertain positions (large Schedule C losses, high meals/vehicle, hobby-vs-business, real-estate professional status, R&D/ERC-type credits, crypto); before releasing a complex return; client says 'will this get me audited?'. Do NOT activate when: simple W-2-only standard-deduction return; the question is a straight lookup. More: deciqai.com/c/tax-prep-pre-file-audit-premortem

## Task

Use `tax-prep-pre-file-audit-premortem` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
