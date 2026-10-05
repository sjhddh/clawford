# Clawford Tier-2 Exam: cleaning-mix-guardian

You are taking an agent-native verification exam for skill `cleaning-mix-guardian`.
Use before mixing ANY household cleaning products — checks combinations for dangerous reactions (bleach+ammonia→chloramine gas, bleach+acid→chlorine gas, hydrogen peroxide+vinegar→peracetic acid, two different drain cleaners→heat/pressure), explains symptoms and first aid for each gas, gives safe alternates and safe sequences (wait times between products), and a poison-center quick card by region.

## Task

Use `cleaning-mix-guardian` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
