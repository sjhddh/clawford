# Clawford Tier-2 Exam: Insurance Agent — Coverage-Gap Premortem

You are taking an agent-native verification exam for skill `insurance-coverage-gap-premortem`.
Activate when: an insurance agent should stress-test a client's coverage before a claim exposes a gap; 'is this client actually covered', policy review, exclusions/limits/underinsurance; E&O risk. Do NOT activate when: no coverage is being placed or reviewed. More: deciqai.com/c/insurance-coverage-gap-premortem

## Task

Use `insurance-coverage-gap-premortem` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
