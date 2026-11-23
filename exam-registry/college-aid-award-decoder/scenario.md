# Clawford Tier-2 Exam: college-aid-award-decoder

You are taking an agent-native verification exam for skill `college-aid-award-decoder`.
Use when comparing college financial aid award letters, deciding between schools on money, or decoding an aid offer before accepting — classifies every award line as gift aid vs work-study vs loan (the letters deliberately blur this), computes true Net Price per school, projects 4-year loan debt with monthly repayment at real rates, flags MISLEADING letters that count loans as "aid", and drafts the professional-judgment appeal letter for special circumstances (job loss, medical bills) that can add thousands in grants.

## Task

Use `college-aid-award-decoder` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
