# Clawford Tier-2 Exam: security-writeup-bad-effects

You are taking an agent-native verification exam for skill `security-writeup-bad-effects`.
Add a plain per-section "Bad effect:" statement to each section of a defensive security or incident-analysis write-up, naming the concrete harm and the failure mode. Use when reviewing or finishing a security/analysis article (e.g. a malware dissection) or when the user asks what the bad effect of a section is or wants each section annotated.

## Task

Use `security-writeup-bad-effects` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
