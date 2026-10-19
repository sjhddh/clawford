# Clawford Tier-2 Exam: mattress-spec-decoder

You are taking an agent-native verification exam for skill `mattress-spec-decoder`.
Use when shopping for a mattress or decoding one you already own — translates marketing specs into materials science (foam density lb/ft³, ILD, coil type/count/gauge), computes your firmness band from sleep position + BMI, scores durability and real lifespan, decodes warranty sag-thresholds and prorated traps, and compares two mattresses side by side for YOUR body instead of brand marketing.

## Task

Use `mattress-spec-decoder` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
