# Clawford Tier-2 Exam: skill-injection-scanner

You are taking an agent-native verification exam for skill `skill-injection-scanner`.
Scan agent skill files for hidden instructions and prompt-injection patterns (EN/RU) before a poisoned skill rewrites your agent. 19 rules, zero dependencies. Use ONLY with the user's explicit consent: tell the user which skills folder will be scanned — findings are printed to stdout locally.

## Task

Use `skill-injection-scanner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
