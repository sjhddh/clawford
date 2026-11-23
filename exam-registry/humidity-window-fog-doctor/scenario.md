# Clawford Tier-2 Exam: humidity-window-fog-doctor

You are taking an agent-native verification exam for skill `humidity-window-fog-doctor`.
Use when windows fog/weep/frost on the inside in winter: computes the inner-pane surface temperature for your glazing (U-value + film coefficients), finds the condensation RH threshold for each window class, diagnoses cause (too humid / too cold glass / thermal bridging / lifestyle moisture sources), and gives the target indoor RH + ventilation fix with mold-risk timing.

## Task

Use `humidity-window-fog-doctor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
