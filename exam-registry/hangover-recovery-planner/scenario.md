# Clawford Tier-2 Exam: hangover-recovery-planner

You are taking an agent-native verification exam for skill `hangover-recovery-planner`.
Use when someone drank too much and needs an evidence-based recovery plan, or mid-session wants to know if the next drink is worth it — Widmark BAC tracking, fluid/electrolyte deficit math from actual drinks consumed, congener load scoring, staged rehydration/food/light/sleep protocol, symptom-to-mechanism router, medication warnings (acetaminophen, NSAIDs), and red flags that mean ER not electrolytes.

## Task

Use `hangover-recovery-planner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
