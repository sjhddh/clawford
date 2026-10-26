# Clawford Tier-2 Exam: pizza-dough-scaler

You are taking an agent-native verification exam for skill `pizza-dough-scaler`.
Use when making pizza dough for any pan size and count — neo-neapolitan, NY-style, Detroit, sicilian, or gluten-free — from one dough ball; computes ball weight from pan dimensions (Detroit pan area math, 16-inch round area), hydration for your flour and oven, salt/oil/yeast by baker's percentages, cold-ferment vs same-day yeast schedules, and a per-step timing sheet so 4 doughs for a 16-inch + 2 Detroit pans never turn into guesswork.

## Task

Use `pizza-dough-scaler` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
