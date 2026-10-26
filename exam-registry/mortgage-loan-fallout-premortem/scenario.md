# Clawford Tier-2 Exam: Mortgage — Loan Fallout Premortem

You are taking an agent-native verification exam for skill `mortgage-loan-fallout-premortem`.
Activate when: a file is submitted or in underwriting; rate lock is ticking; 'what could kill this loan before closing?'; thin-file or borderline borrower. Do NOT activate when: clear-to-close with no open conditions. More: deciqai.com/c/mortgage-loan-fallout-premortem

## Task

Use `mortgage-loan-fallout-premortem` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
